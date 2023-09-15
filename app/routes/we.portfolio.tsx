import type { V2_MetaFunction } from "@remix-run/node";
import Portfolio from "~/components/we/Portfolio";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function WePortfolio() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}
