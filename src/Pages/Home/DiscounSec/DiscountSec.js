import React from "react";

const DiscountSec = () => {
  return (
    <div className="hero bg-base-200 p-12">
      <div className="mt-12 p-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 mt-4">
          <div className="card  text-accent-content w-3/4">
            <h1 className="text-5xl font-bold text-primary">
              Get 50% discount on your first order
            </h1>
            <p className="py-6 text-black">
              We provide 50% discount on a product to our newly comer
              customer.As our 10 year celebration is coming we will be giving
              free shipping to every order.Stay tuned till then!
            </p>
            <button className="btn w-20 btn-primary">Order</button>
          </div>
          <div className="card  text-accent-content">
            <img
              src="https://imgs.search.brave.com/5u6bqqYJRfd_Q2P4K6ziDbsFNqYgiEn7mECcpV0rjOM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5h/dGNidWlsZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MDIvSU1HXzIxMzEu/anBn"
              alt="pic"
              className="w-100  rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSec;
