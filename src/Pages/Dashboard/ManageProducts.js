import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const [tools, setTools] = useState([]);
  const {
    data: alltools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://scrap-management-server-side.onrender.com/tool").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDelete = (id) => {
    fetch(`https://scrap-management-server-side.onrender.com/tool/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingTools = tools.filter((tool) => tool._id !== id);
        setTools(remainingTools);
        toast.success("tool deleted successfully");
        refetch();
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary">
        Manage products:{alltools.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>avatar</th>
              <th>Name</th>
              <th>Available Quantity</th>
              <th>Minimum Order Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alltools.map((tool, index) => (
              <tr key={tool._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={tool.image} alt="tool" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{tool.name}</td>
                <td>{tool.quantity}</td>
                <td>{tool.minimum}</td>
                <td>
                  <button
                    onClick={() => handleDelete(tool._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
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

export default ManageProducts;
