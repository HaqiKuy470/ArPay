import type { MDXComponents } from 'mdx/types'

// File ini memungkinkan kita memberi styling Tailwind ke tag HTML standar di Markdown
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-10 mb-4 flex items-center gap-2"><span className="text-green-400">#</span> {children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-8 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold text-slate-200 mt-6 mb-2">{children}</h4>,
    p: ({ children }) => <p className="text-slate-400 mb-4 leading-relaxed">{children}</p>,
    code: ({ children }) => <code className="bg-white/10 text-green-300 px-1.5 py-0.5 rounded font-mono text-sm">{children}</code>,
    pre: ({ children }) => <pre className="bg-[#0a1118] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed mb-6 shadow-xl">{children}</pre>,
    ul: ({ children }) => <ul className="list-disc list-inside text-slate-400 mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside text-slate-400 mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-slate-400 mb-2 leading-relaxed">{children}</li>,
    hr: () => <hr className="border-white/10 my-8" />,
    strong: ({ children }) => <strong className="text-slate-200 font-semibold">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-green-400 pl-4 my-4 text-slate-400 italic">
        {children}
      </blockquote>
    ),

    // Table styling
    table: ({ children }) => (
      <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
        <table className="w-full text-sm text-left">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-white/5 text-xs uppercase tracking-wider text-slate-400 border-b border-white/10">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-white/5">
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-white/5 transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 font-semibold text-slate-300 whitespace-nowrap">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-slate-400 align-top">
        {children}
      </td>
    ),

    ...components,
  }
}