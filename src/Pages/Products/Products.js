import React, { useEffect, useState } from "react";
import Tool from "../Home/Tool";

const Products = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://scrap-management-server-side.onrender.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="my-28">
      <h2 className="text-4xl font-bold text-center">Our GPUS</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {tools.map((tools) => (
          <Tool key={tools._id} tools={tools}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Products;
