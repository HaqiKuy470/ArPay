"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@400;700;800&display=swap');`;

interface Step { t: string; label: string; detail: string; }
const steps: Step[] = [
  { t: "T0", label: "Grant Trigger", detail: "System detects environmental action or DePIN sensor data, triggering reward distribution." },
  { t: "T1", label: "Sign TX", detail: "Authorized distributor signs Solana transaction to initiate on-chain reward flow." },
  { t: "T2", label: "Escrow Lock", detail: "USDC reward is locked in an on-chain escrow program, emitting a settlement event." },
  { t: "T3", label: "Oracle Listen", detail: "Off-chain monitoring service captures confirmed finality of the environmental grant." },
  { t: "T4", label: "Fiat Disbursement", detail: "IDR incentive is disbursed directly to the contributor's e-wallet via licensed fiat rails." },
  { t: "T5", label: "Verified", detail: "Contributor receives real-world value. Assets remain a transparent on-chain flow for ESG reporting." },
];

interface Stat { val: string; label: string; }
const stats: Stat[] = [
  { val: "< 5s", label: "Settlement" },
  { val: "30M+", label: "QRIS Endpoints" },
  { val: "Non-Custodial", label: "Asset Flow" },
  { val: "Oracle-Based", label: "Distribution" },
];

const stack: [string, string, string][] = [
  ["On-Chain", "Rust + Anchor", "Solana escrow program for rewards"],
  ["Client", "Next.js PWA", "Reward scanner + wallet integration"],
  ["Oracle", "Python / Node", "Event-driven disbursement listener"],
  ["Fiat Rail", "Xendit + BI-FAST", "Licensed payout infrastructure layer"],
  ["Price Feed", "Pyth Network", "USDC/IDR reference for fair incentives"],
];

export default function ArPayHackathon() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [txAnimating, setTxAnimating] = useState<boolean>(false);
  const [txState, setTxState] = useState<number>(0);
  
  const runDemo = () => {
    if (txAnimating) return;
    setTxAnimating(true);
    setTxState(1);
    setTimeout(() => setTxState(2), 800);
    setTimeout(() => setTxState(3), 2200);
    setTimeout(() => { setTxAnimating(false); setTxState(0); }, 5500);
  };

  const txLabel = ["READY", "PROCESSING...", "REWARD LOCKED ✓", "IDR DISBURSED"][txState];
  const txColor = ["#4ade80", "#facc15", "#4ade80", "#4ade80"][txState];

  return (
    <>
      <style>{FONT}</style>
      <div style={{
        minHeight: "100vh",
        background: "#050a0e",
        color: "#c9d4dc",
        fontFamily: "'Outfit', sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}>

        <div style={{
          position: "fixed", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(0,255,160,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,160,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(5,10,14,0.85)",
          backdropFilter: "blur(16px)",
          padding: "0 clamp(16px, 5vw, 32px)",
          height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700, fontSize: 18, color: "#fff",
              letterSpacing: "-0.5px",
            }}>ArPay</span>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10, color: "#4ade80",
              background: "rgba(74,222,128,0.1)",
              border: "1px solid rgba(74,222,128,0.3)",
              padding: "2px 8px", borderRadius: 4,
            }}>ECO-SOLANA 2026</span>
          </div>
          <motion.a 
            href="https://arpay.my.id" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12, color: "#050a0e",
              background: "#4ade80",
              padding: "8px 20px", borderRadius: 6,
              textDecoration: "none", fontWeight: 700,
            }}
          >
            Launch App →
          </motion.a>
        </nav>

        <div style={{ position: "relative", zIndex: 1 }}>

          <section style={{ padding: "clamp(120px, 15vw, 160px) clamp(20px, 5vw, 32px) clamp(60px, 10vw, 100px)" }}>
            <div style={{ 
              maxWidth: 1200, 
              margin: "0 auto", 
              display: "flex", 
              flexWrap: "wrap", 
              alignItems: "center", 
              gap: "clamp(40px, 8vw, 80px)" 
            }}>

              <div style={{ flex: "1 1 500px" }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11, color: "#4ade80",
                  letterSpacing: "0.15em", marginBottom: 20,
                  display: "flex", alignItems: "center", gap: 8,
                  flexWrap: "wrap",
                }}>
                  <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
                  GREEN INCENTIVE DISTRIBUTION PROTOCOL
                </div>

                <h1 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(42px, 7vw, 88px)",
                  lineHeight: 1.15,
                  color: "#fff",
                  margin: "0 0 24px",
                  letterSpacing: "-1px",
                }}>
                  Eco-Rewards<br />
                  <span style={{
                    WebkitTextStroke: "1.5px #4ade80",
                    color: "transparent",
                  }}>Distributed</span><br />
                  via USDC Rails.
                </h1>

                <p style={{
                  fontSize: "clamp(16px, 2vw, 18px)", color: "#7a8f9e",
                  maxWidth: 520, lineHeight: 1.6, marginBottom: 36,
                }}>
                 ArPay is a settlement infrastructure layer connecting Solana-based environmental incentives
with local economies via licensed fiat rails. Empowering sustainable actions through seamless real-world rewards.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <motion.a 
                    href="/docs/ArPay_Protocol.pdf" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      padding: "14px 28px",
                      background: "#4ade80", color: "#050a0e",
                      borderRadius: 8, fontWeight: 700, fontSize: 13,
                      textDecoration: "none", display: "inline-block"
                    }}
                  >
                    Technical Docs
                  </motion.a>
                  
                  <motion.button 
                    onClick={runDemo} 
                    disabled={txAnimating}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      padding: "14px 28px",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#c9d4dc", borderRadius: 8, fontWeight: 700,
                      fontSize: 13, cursor: "pointer",
                    }}
                  >
                    {txAnimating ? "Running..." : "▶ Simulate Grant"}
                  </motion.button>
                </div>

                <div style={{
                  marginTop: 48,
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "clamp(16px, 3vw, 24px)",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "clamp(11px, 2vw, 13px)",
                  maxWidth: 560,
                  overflowX: "auto",
                }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                    {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                      <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                    ))}
                    <span style={{ color: "#4a5568", marginLeft: 8, fontSize: 11 }}>arpay_incentive.log</span>
                  </div>
                  <div style={{ color: "#4a5568", marginBottom: 8 }}>$ arpay distribute --reward 12.5 USDC --receiver &quot;EcoHub_Malang&quot;</div>
                  <div style={{ color: "#c9d4dc" }}>Grant: <span style={{ color: "#818cf8" }}>12.500000 USDC</span></div>
                  <div style={{ color: "#c9d4dc" }}>Rate: <span style={{ color: "#818cf8" }}>1 USDC = Rp 15,840</span></div>
                  <div style={{ color: "#c9d4dc" }}>Incentive: <span style={{ color: "#4ade80" }}>Rp 198,000</span></div>
                  <div style={{ color: "#c9d4dc" }}>Escrow PDA: <span style={{ color: "#facc15" }}>8f3a...92ab</span></div>
                  <div style={{
                    marginTop: 12, paddingTop: 12,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    color: txColor,
                    transition: "color 0.4s",
                  }}>
                    Status: {txLabel}
                    {txState === 3 && <span style={{ color: "#7a8f9e", marginLeft: 16, fontSize: 11 }}>T0→T5: 3.2s</span>}
                  </div>
                </div>
              </div>

              <div className="hide-on-mobile" style={{ flex: "1 1 400px", display: "flex", justifyContent: "center", position: "relative" }}>
                <div style={{ 
                  width: "100%", 
                  maxWidth: "500px",
                  aspectRatio: "4/5",
                  background: "linear-gradient(145deg, rgba(74,222,128,0.05) 0%, rgba(0,0,0,0.4) 100%)",
                  border: "2px dashed rgba(74,222,128,0.3)", 
                  borderRadius: "24px", 
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: "center", 
                  justifyContent: "center",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "center",
                  padding: "20px"
                }}>
                  <span style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.8 }}>🌿</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "14px", color: "#4ade80", fontWeight: 700 }}>ECO-DEMO AREA</span>
                  <span style={{ fontSize: "12px", color: "#7a8f9e", marginTop: "12px", lineHeight: 1.5 }}>
                    Showcase sustainable impact<br/> or DePIN sensor visualization here.
                  </span>
                </div>
              </div>

            </div>
          </section>

          <section style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(32px, 6vw, 48px) clamp(20px, 5vw, 32px)",
          }}>
            <div style={{
              maxWidth: 1100, margin: "0 auto",
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 32,
            }}>
              {stats.map(({ val, label }, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 700, color: "#fff",
                    marginBottom: 6,
                  }}>{val}</div>
                  <div style={{ fontSize: 13, color: "#4a5568", letterSpacing: "0.1em" }}>{label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 32px)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11, color: "#4ade80",
              letterSpacing: "0.15em", marginBottom: 16,
            }}>REWARD LIFECYCLE</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)",
              color: "#fff", margin: "0 0 48px", letterSpacing: "-1px",
              lineHeight: 1.2,
            }}>T0 → T5: Instant Gratification</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.98 }} 
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "clamp(40px, 8vw, 80px) 1fr",
                    gap: "clamp(12px, 3vw, 24px)",
                    padding: "20px clamp(16px, 3vw, 24px)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    background: activeStep === i ? "rgba(74,222,128,0.04)" : "transparent",
                    transition: "background 0.2s",
                  }}
                >
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 13, color: "#4ade80",
                    fontWeight: 700, paddingTop: 2,
                  }}>{s.t}</div>
                  <div>
                    <div style={{ fontSize: "clamp(15px, 2vw, 16px)", color: "#fff", fontWeight: 700, marginBottom: activeStep === i ? 8 : 0 }}>{s.label}</div>
                    
                    <AnimatePresence>
                      {activeStep === i && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "clamp(11px, 1.5vw, 12px)", color: "#7a8f9e", lineHeight: 1.7,
                            overflow: "hidden"
                          }}
                        >
                          {s.detail}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          </section>

          <section style={{
            padding: "clamp(60px, 10vw, 80px) clamp(20px, 5vw, 32px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.3)",
          }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11, color: "#4ade80",
                letterSpacing: "0.15em", marginBottom: 16,
              }}>TRI-LAYER ARCHITECTURE</div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)",
                color: "#fff", margin: "0 0 48px", letterSpacing: "-1px",
                lineHeight: 1.2,
              }}>Verified Sustainability Settlement.</h2>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}>
                {stack.map(([layer, tech, desc], i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "20px",
                  }}>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10, color: "#4ade80",
                      letterSpacing: "0.12em", marginBottom: 10,
                    }}>{layer.toUpperCase()}</div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700, fontSize: 16, color: "#fff",
                      marginBottom: 6,
                    }}>{tech}</div>
                    <div style={{ fontSize: 12, color: "#4a5568", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 32px)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11, color: "#4ade80",
              letterSpacing: "0.15em", marginBottom: 16,
            }}>TARGET ECOSYSTEMS</div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)",
              color: "#fff", margin: "0 0 48px", letterSpacing: "-1px",
              lineHeight: 1.2,
            }}>Scaling Impact</h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}>
              {[
                ["Green Initiatives", "Enable instant distribution of environmental rewards via QRIS infrastructure for local communities."],
                ["DePIN Networks", "Bridge physical environmental sensors (solar/waste) with seamless local fiat incentives."],
                ["Sustainability NGOs", "Distribute volunteer grants and operational funds transparently using blockchain settlement."],
              ].map(([title, desc], i) => (
                <div key={i} style={{
                  padding: "28px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "rgba(74,222,128,0.12)",
                    border: "1px solid rgba(74,222,128,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16, fontSize: 16, color: "#4ade80",
                    fontFamily: "'Space Mono', monospace", fontWeight: 700,
                  }}>{String(i+1).padStart(2,"0")}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
          </section>

          <section style={{
            padding: "clamp(60px, 10vw, 80px) clamp(20px, 5vw, 32px) clamp(80px, 15vw, 120px)",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 64px)",
              color: "#fff",
              lineHeight: 1.2,
              margin: "0 0 12px", letterSpacing: "-1.5px",
            }}>The Incentive Bridge.</h2>
            <p style={{ color: "#4a5568", fontSize: "clamp(14px, 2vw, 16px)", marginBottom: 36 }}>
              On-chain transparency. Real-world rewards.
            </p>
            <motion.a 
              href="https://arpay.my.id" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: "'Space Mono', monospace",
                display: "inline-block",
                padding: "16px 40px",
                background: "#4ade80", color: "#050a0e",
                borderRadius: 8, fontWeight: 700, fontSize: 14,
                textDecoration: "none",
              }}
            >
              Explore Protocol → 
            </motion.a>
          </section>

          <footer style={{
            padding: "24px clamp(20px, 5vw, 32px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 12,
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12, color: "#4a5568",
            }}>© {new Date().getFullYear()} ArPay Protocol · Green Incentive Settlement Demo (Non-Custodial)</span>
            <a href="https://arpay.my.id" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12, color: "#4ade80", textDecoration: "none",
            }}>arpay.id</a>
          </footer>
        </div>

        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
          @media (max-width: 768px) { .hide-on-mobile { display: none !important; } }
        `}</style>
      </div>
    </>
  );
}