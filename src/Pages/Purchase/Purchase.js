import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const [btnDisable, setBtnDisable] = useState(false);
  console.log(id, "id")
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery(["tool", id], () =>
    fetch(`https://scrap-management-server-side.onrender.com/tool/${id}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(tools, "From tools")

  const handleInput = (e) => {
    let orderQuantity = parseInt(e.target.value);
    let toolsQuantity = parseInt(quantity);
    let minquantity = parseInt(minimum);
    if (orderQuantity > toolsQuantity || minquantity > orderQuantity) {
      setBtnDisable(true);
    }
    else {
      setBtnDisable(false);
    }
  };

  const { _id, name, image, price, description, quantity, minimum } = tools;

  const handlePurchase = (event) => {
    event.preventDefault();

    const purchaseQuantity = event.target.minquantity.value;
    let remaining = parseInt(quantity) - purchaseQuantity;
    const totalMoney = purchaseQuantity * price;
    const purchase = {
      toolsId: tools?._id,
      tools: name,
      purchaseQuantity,
      price,
      customer: user.email,
      totalMoney,
      customerName: user.displayName,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    console.log(purchase);
    let newTools = {
      name,
      image,
      price,
      quantity: remaining,
      description,
      minimum,
    };

    fetch(`https://scrap-management-server-side.onrender.com/tool/${id}`, {
      method: "PUT",
      body: JSON.stringify(newTools),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch("https://scrap-management-server-side.onrender.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        toast(`purchased`);
      });
  };
  return (
    <div className="mb-6 flex  items-center justify-center">
      <div className="hero min-h-screen w-1/2 bg-base-200 p-4">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            alt="tool"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <h1 className="font-bold">Available Quantity:{quantity}</h1>
            <h1 className="font-bold">Minimum order Quantity:{minimum}</h1>
            <h1 className="font-bold">Price:{price}</h1>
            <p className="py-6">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <form onSubmit={handlePurchase}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              disabled
              value={user?.email || ""}
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="your Address"
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Order Quantity</span>
            </label>
            <input
              onChange={handleInput}
              type="number"
              name="minquantity"
              placeholder="Enter how many to purchase"
              min={0}
              required
              className="input searchField input-bordered input-primary "
            />
          </div>

          <input
            disabled={btnDisable}
            type="submit"
            value="order"
            className="btn w-full max-w-xs mt-6 bg-primary"
          />
          {btnDisable && (
            <p className="text-red-500 mt-2">Please enter valid quantity</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Purchase;
