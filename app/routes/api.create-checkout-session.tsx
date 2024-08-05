import { ActionFunction, redirect } from "@remix-run/node";

import { stripe } from "~/utils/stripe.server";

export const action: ActionFunction = async () => { // Removed the unused request parameter
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: process.env.PRODUCT_ID!, // Use the correct price ID
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.DOMAIN}?success=true`,
    cancel_url: `${process.env.DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
  });

  // Use the redirect utility to ensure a proper redirect response
  return redirect(session.url!, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
