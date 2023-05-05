import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const CartProducts = () => {
    const [user] = useAuthState(auth);
    const [carts, setCarts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        fetch(
            `https://scrap-management-server-side.onrender.com/cartItems?customer=${email}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        )
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    navigate("/");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setCarts(data);
            });
    }, [user]);
    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`);
    };
    const handleItemDelete = (id) => {
        console.log(id);
        const confirm = window.confirm("Do you delete this item?");
        if (confirm) {
            fetch(`https://scrap-management-server-side.onrender.com/cartItems/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remainingOrder = carts.filter((order) => order._id !== id);
                    toast.success("order deleted successfully");
                    setCarts(remainingOrder);
                });
        }
    };

    return (
        <div className="mt-8 mb-9 ">
            <h2 className="text-4xl text-center font-bold text-primary mb-9">My carts</h2>
            <h2 className="text-2xl text-center font-bold text-primary mb-9">Total Products: {carts.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Buy</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((a, index) => (
                            <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.product}</td>


                                <td>
                                    <button
                                        onClick={() => handlePurchase(a._id)}
                                        className="btn btn-xs btn-success"
                                    >
                                        order
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleItemDelete(a._id)}
                                        className="btn btn-xs btn-warning"
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartProducts;
