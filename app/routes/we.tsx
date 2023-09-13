import { Outlet } from "@remix-run/react";
import FooterNav from "~/components/FooterNav";
import NavBar from "~/components/NavBar";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];

export default function We() {
    return (
        <>
         <NavBar/>
         <Outlet/>
         <FooterNav/>
        </>
    );
    }