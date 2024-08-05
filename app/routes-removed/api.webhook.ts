// import { ActionFunction } from "@remix-run/node";

// import { stripe } from "~/utils/stripe.server";

// export const action: ActionFunction = async ({ request }) => {
//   const signature = request.headers.get("Stripe-Signature");
//   const payload = await request.text();

//   try {
//     const event = stripe.webhooks.constructEvent(
//       payload,
//       signature!,
//       process.env.STRIPE_WEBHOOK_ENDPOINT!
//     );

//     if (event.type === "checkout.session.completed") {
//       // const session = event.data.object; // Commented out to remove unused variable error
//       // Handle successful payment here
//     }

//     return new Response(null, { status: 200 });
//   } catch (err) {
//     let errorMessage = 'Unknown error';
//     if (err instanceof Error) {
//       errorMessage = err.message;
//     }

//     return new Response(`Webhook Error: ${errorMessage}`, { status: 400 });
//   }
// };
