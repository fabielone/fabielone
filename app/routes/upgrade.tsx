import { Form, useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

interface CheckoutSessionResponse {
  url: string;
}

export default function Upgrade() {
  const fetcher = useFetcher<CheckoutSessionResponse>();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (fetcher.data?.url) {
      window.location.href = fetcher.data.url;
    }
  }, [fetcher.data]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <Form method="post" action="/api/create-checkout-session">
      <button type="submit">Checkout</button>
    </Form>
  </section>
);

const Message = ({ message }: { message: string }) => (
  <section>
    <p>{message}</p>
  </section>
);
