import { Badge, Button } from "@acme/ui";

export function Hero({ headline, cta }: { headline: string; cta: string }) {
  return (
    <section className="w-[420px] space-y-3">
      <Badge tone="success">New</Badge>
      <h1 className="text-2xl font-bold text-zinc-900">{headline}</h1>
      <p className="text-sm text-zinc-600">Catch visual changes in every pull request.</p>
      <Button>{cta}</Button>
    </section>
  );
}
