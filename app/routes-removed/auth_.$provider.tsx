// app/routes/auth/$provider.tsx
import { ActionFunctionArgs, redirect } from "@remix-run/node"

import { authenticator } from '../services/auth.server';

export const loader = () => redirect('/login');

export const action = ({ request, params }: ActionFunctionArgs) => {
  const provider = params.provider || ""; // Handle the case where params.provider is undefined
  return authenticator.authenticate(provider, request);
};
