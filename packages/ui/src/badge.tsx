export function Badge({ tone = "neutral", children }: { tone?: "neutral" | "success" | "warning"; children: React.ReactNode }) {
  const tones = { neutral: "bg-zinc-100 text-zinc-700", success: "bg-green-100 text-green-800", warning: "bg-amber-100 text-amber-800" };
  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
