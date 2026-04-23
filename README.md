# 🌿 ARPAY PROTOCOL: Eco-Incentive Settlement Layer

## 1. Abstract
ArPay Protocol is a decentralized, non-custodial settlement infrastructure built on the Solana blockchain. It enables real-time crypto-to-fiat incentive distribution, bridging Web3 sustainability grants (USDC) directly to local communities via the QRIS (Quick Response Code Indonesian Standard) network. By leveraging Solana’s high throughput and sub-second finality, ArPay eliminates traditional cross-border remittance friction without requiring local receivers to interact with crypto assets.

---

## 2. System Architecture
The ArPay ecosystem operates on a tri-layer architecture, ensuring a strict separation of concerns between on-chain grant execution and off-chain fiat reward settlement.

### 2.1. Client Layer (Next.js PWA)
The frontend is a lightweight, mobile-first Progressive Web App built with **Next.js**. 
* **QR Parsing:** Captures and decodes the national standard QR code payload to extract the `NMID` (National Receiver ID) and the incentive amount.
* **Wallet Connection:** Integrates `@solana/wallet-adapter-react` to facilitate secure connection with browser-based wallets for green initiative sponsors.
* **Solana Pay Integration:** Constructs standard Solana Pay URIs (`solana:...`) to prompt seamless grant distribution signing.

### 2.2. On-Chain Layer (Solana Program)
The core logic resides in a custom Solana Program written in Rust/C++ using the Anchor framework.
* **Escrow PDA (Program Derived Address):** Grant funds (USDC) are temporarily locked in a PDA to ensure transparent, atomic settlement during the fiat disbursement window.
* **Event Emission:** Upon successful USDC transfer, the program emits a structured event containing the `receiver_id`, `fiat_amount`, and `sponsor_pubkey`.

### 2.3. Oracle & Bridge Layer (Python & Ubuntu Environment)
The off-chain infrastructure handles the critical leap from Web3 to the legacy banking system.
* **WSS Listener:** A lightweight Python daemon maintains a persistent WebSocket connection to a Solana RPC node (e.g., Helius or QuickNode).
* **Grant Verification:** The listener filters for transactions interacting with the ArPay Program ID. Once a `Confirmed` or `Finalized` block status is achieved, it extracts the event data.
* **Fiat API Gateway:** The Python backend immediately fires an authenticated POST request to a licensed local Fiat Disbursement API (e.g., Xendit) to disburse the exact IDR reward to the local community's bank account.

---

## 3. Incentive Lifecycle (Sequence Flow)
The following represents the step-by-step execution of a standard ArPay eco-reward distribution:

1. **Trigger & Scan:** A verifiable environmental action occurs. The sponsor/PWA scans the community's QRIS and fetches the USDC/IDR rate via a decentralized Oracle (Pyth Network).
2. **Sign Grant:** The sponsor signs a transaction transferring `X` USDC to the ArPay Program PDA.
3. **On-Chain Confirmation:** The Solana network processes the transaction. The Program emits a `SettlementRequested` event.
4. **Listener Trigger:** The Python listener detects the event via RPC WebSocket.
5. **Fiat Execution:** The listener calls the local Fiat API: `POST /disbursements` with the receiver's bank details and the IDR amount.
6. **Community Notification:** The funds are settled via the BI-FAST network. The community hub receives a standard banking notification of the reward received.

---

## 4. Security & Compliance Assumptions
* **Non-Custodial:** The protocol never holds private keys. Sponsors sign transactions directly from their self-custody wallets.
* **Atomic Disbursement:** The receiver gets fiat liquidity instantly. If the fiat API fails, the backend triggers a fallback mechanism to refund the USDC on the Solana Program.
* **Regulatory Isolation:** The protocol acts strictly as a technology bridge. Communities exclusively receive legal tender (IDR), maintaining 100% compliance with local central bank regulations.

---

### Architecture

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#1e1e2e', 'primaryTextColor': '#cdd6f4', 'primaryBorderColor': '#89b4fa', 'lineColor': '#89b4fa', 'fontFamily': 'Inter'}}}%%
flowchart TD
    subgraph Frontend ["📱 GROUP FRONTEND LAYER"]
        A[Sponsor App<br>Next.js PWA]
    end

    subgraph OnChain ["⚡ GROUP ON-CHAIN LAYER (SOLANA)"]
        B[ArPay Smart Contract<br>Program / PDA]
    end

    subgraph OffChain ["⚙️ GROUP OFF-CHAIN FIAT BRIDGE"]
        C[Python Listener<br>Ubuntu Server]
        D[Fiat Disbursement API<br>Licensed Processor]
    end

    subgraph Retail ["🌿 GROUP LOCAL COMMUNITY"]
        E[Community Bank Account<br>QRIS Destination]
    end

    A -- "1. Scan QRIS & Grant USDC" --> B
    B -- "2. Emit Event (~400ms Finality)" --> C
    C -- "3. POST /disburse (IDR Amount)" --> D
    D -- "4. Settle Reward (< 2 Seconds)" --> E

    style A fill:#89b4fa,stroke:#b4befe,stroke-width:2px,color:#11111b
    style B fill:#cba6f7,stroke:#b4befe,stroke-width:2px,color:#11111b
    style C fill:#f9e2af,stroke:#b4befe,stroke-width:2px,color:#11111b
    style D fill:#f38ba8,stroke:#b4befe,stroke-width:2px,color:#11111b
    style E fill:#a6e3a1,stroke:#b4befe,stroke-width:2px,color:#11111b
    style Frontend fill:none,stroke:#89b4fa,stroke-width:2px,stroke-dasharray: 5 5,color:#89b4fa
    style OnChain fill:none,stroke:#cba6f7,stroke-width:2px,stroke-dasharray: 5 5,color:#cba6f7
    style OffChain fill:none,stroke:#f38ba8,stroke-width:2px,stroke-dasharray: 5 5,color:#f38ba8
    style Retail fill:none,stroke:#a6e3a1,stroke-width:2px,stroke-dasharray: 5 5,color:#a6e3a1