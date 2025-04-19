import React from "react";
import { Helmet } from "react-helmet-async";
import Chackoutui from "../components/checkout/Chackoutui";
import Contact from "../components/checkout/contact";

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout - Investmate</title>
        <meta
          name="description"
          content="Complete your investment process securely with Investmate's checkout system. Fast, secure, and reliable payment processing."
        />
        <meta
          name="keywords"
          content="checkout, payment, investment payment, secure payment, investment checkout"
        />
        <meta property="og:title" content="Checkout - Investmate" />
        <meta
          property="og:description"
          content="Complete your investment process securely with Investmate's checkout system. Fast, secure, and reliable payment processing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Checkout - Investmate" />
        <meta
          name="twitter:description"
          content="Complete your investment process securely with Investmate's checkout system. Fast, secure, and reliable payment processing."
        />
      </Helmet>
      <main className="mt-24 md:mt-28 lg:mt-36 px-4 md:px-8">
        <Chackoutui />
        <Contact />
      </main>
    </>
  );
};

export default Checkout;
