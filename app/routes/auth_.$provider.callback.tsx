// app/routes/auth/$provider.tsx
import { ActionFunction,LoaderFunction} from "@remix-run/node"

import { createUserSession } from "~/session.server";

import { authenticator } from '../services/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.authenticate("google", request);
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const redirectTo = session.get("redirectTo") || "/";
  return createUserSession({ request, userId: user.id, remember: true, redirectTo });
};