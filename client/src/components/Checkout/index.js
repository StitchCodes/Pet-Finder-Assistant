import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { Button } from "semantic-ui-react";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const checkoutOptions = {
    lineItems: ["item", "item2"],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async (item) => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      ...checkoutOptions,
      lineItems: [
        {
          price: item,
          quantity: 1,
        },
      ],
    });
    console.log("Stripe checkout error", error);
    console.log(checkoutOptions);
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  const items = [
    {
      id: "price_1KwflSICHq31twfTkBE9o0KS",
      text: "100.00",
    },
    {
      id: "price_1KwfmkICHq31twfTzaU8KfLv",
      text: "200.00",
    },
    {
      id: "price_1KwfnZICHq31twfTjz4y4Psd",
      text: "500.00",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <Button
         style={{"margin-bottom": '1rem' }}
          primary
          key={item.id}
          onClick={() => redirectToCheckout(item.id)}
          disabled={isLoading}
        >
          $ {item.text} MXN
        </Button>
      ))}
    </div>
  );
};

export default Checkout;
