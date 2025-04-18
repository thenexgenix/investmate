import React from "react";
import Chackoutui from "../components/checkout/Chackoutui";
import Contact from "../components/checkout/contact";

const Checkout = () => {
  return (
    <>
      <main className="mt-24 md:mt-28 lg:mt-36 px-4 md:px-8">
      <Chackoutui/>
      <Contact/>
      </main>
    </>
  );
};

export default Checkout;
