import React from "react";
import { Link } from "react-router-dom";
import AnimationCheckout from "../../Components/Checkout";

function CheckoutSuccessPage() {
  return (
    <main className="page-body">
      <h1>Thank you for your purchase!</h1>
      < Link to="/" className="link-checkout">&#10092; Go back to the store</Link>
      <AnimationCheckout />
    </main>
  );
}

export default CheckoutSuccessPage;