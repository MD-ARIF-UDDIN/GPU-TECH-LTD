import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const email = user?.email;
    fetch(
      `https://scrap-management-server-side.onrender.com/purchase?customer=${email}`,
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
        setOrders(data);
      });
  }, [user]);

  const handleItemDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Do you delete this item?");
    if (confirm) {
      fetch(`https://scrap-management-server-side.onrender.com/purchase/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingOrder = orders.filter((order) => order._id !== id);
          toast.success("order deleted successfully");
          setOrders(remainingOrder);
        });
    }
  };

  return (
    <div>
      <h2>My orders: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tool</th>
              <th>Orderd Quantity</th>
              <th>Order Money</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.customerName}</td>
                <td>{a.tools}</td>

                <td>{a.purchaseQuantity}</td>
                <td>{a.totalMoney}</td>

                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
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

export default MyOrders;
