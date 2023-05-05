import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import './Tool.css'
import useAdmin from "../../hooks/useAdmin";

const Tool = ({ tools }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const { _id, name, image, price, description, minimum, quantity } = tools;
  const navigate = useNavigate();
  const handlePurchase = (id) => {
    navigate(`/purchase/${_id}`);
  };
  const navigateToManageItem = () => {
    navigate(`/inventory/${_id}`);
  };
  const handleAddCart = () => {

    const cartItemss = {
      _id: _id,
      customer: user.email,
      customerName: user.displayName,
      product: name,
    };
    fetch("https://scrap-management-server-side.onrender.com/cartItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItemss),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(`cartItemss added successfully`);
      });
  };
  return (

    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-2 pt-10">
        <img
          src={image}
          alt="tool"
          className="rounded-xl pro-img"
        />
      </figure>
      <div className="card-body">
        <h2 className="pro-title card-title">{name}</h2>
        <h1>Available Quantity:{quantity}</h1>
        <h1 className="font-bold">Minimum order Quantity:{minimum}</h1>
        <h1>Price:{price}</h1>
        <p>{description}</p>
        <div className="card-actions  flex justify-between">
          {!admin && <button onClick={() => handlePurchase(_id)} className="btn btn-primary">Buy Now</button>}
          {!admin && <button onClick={handleAddCart} className="btn btn-primary">Add to cart <FaCartPlus /></button>}
          {admin && <button onClick={navigateToManageItem} className="btn btn-primary">Restock</button>}
        </div>
      </div>
    </div>

  );
};

export default Tool;
