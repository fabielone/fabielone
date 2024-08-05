

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ThemeModeScript } from "flowbite-react";



import stylesheet from "~/tailwind.css";

//import ContactSection from "./components/molecules/Homepage/Contact";
import Footer from "./components/molecules/Homepage/Footer";
import { NavBar } from "./components/molecules/Homepage/NavBar";
import { authenticator } from "./services/auth.server";
import { useOptionalUser } from "./utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request);
  return json({ user });
};

export default function App() {
  const user = useOptionalUser();
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/_static/favicon.ico" />
        <Meta />
        <Links />
        <ThemeModeScript />
      </head>
      <body className="h-full">
        <NavBar user={user} />
        <Outlet />
        {/* <ContactSection  /> */}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
