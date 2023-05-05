import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  'pk_test_51L48NeCBwhI06WEf7saOIwZ3B4AKv28ABrPseH2Fhn3a8ybv9bFGqrEIjtI77spKq7m61kWxU2Ff3GfNotaQPKmN00yiMBikG6'
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://scrap-management-server-side.onrender.com/purchase/${id}`;

  const { data: order, isLoading } = useQuery(["purchase", id], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h1 className="text-3xl font-bold">
            Hello,<span className="text-primary">{order.customerName}</span>
          </h1>
          <h2 className="card-title">
            Pay for:<span className="text-primary">{order.tools}</span>
          </h2>
          <p>
            please pay:<span className="text-primary">{order.totalMoney}</span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body"></div>

        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
