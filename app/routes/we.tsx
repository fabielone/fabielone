import { Outlet } from "@remix-run/react";
import NavBar from "~/components/NavBar";
import type { V2_MetaFunction } from "@remix-run/node";
import LargeWithNewsletter from "~/components/we/weFooter";
import { Box } from "@chakra-ui/react";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function We() {
  return (
    <>
      <NavBar />
      <Box pt={'160px'} minH={'100vh'}>
      <Outlet />
      </Box>
      <LargeWithNewsletter />
    </>
  );
}
