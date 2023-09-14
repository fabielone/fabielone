import DescComp from "~/components/DescComp";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function Index() {
  return <DescComp />;
}
