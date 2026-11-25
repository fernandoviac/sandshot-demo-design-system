import { Badge } from "./badge";

export default { title: "Components/Badge", component: Badge };

// A Component Story Format 2 story: a function of its args.
export const Tones = () => (
  <div className="flex gap-2">
    <Badge>Draft</Badge>
    <Badge tone="success">Live</Badge>
    <Badge tone="warning">Review</Badge>
  </div>
);
