export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="w-72 rounded-xl border border-zinc-200 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-zinc-900" style={{ fontFamily: "'Roboto Slab', serif" }}>{title}</h3>
      <div className="mt-2 text-sm text-zinc-600">{children}</div>
    </section>
  );
}
