import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function WePortfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  );
}
