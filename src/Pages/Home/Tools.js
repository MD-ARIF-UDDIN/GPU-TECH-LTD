import React, { useEffect, useState } from "react";
import Tool from "./Tool";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Tools = () => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();
  const handleProducts = (id) => {
    navigate(`/products`);
  };
  useEffect(() => {
    fetch("https://scrap-management-server-side.onrender.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="my-28">
      <h2 className="text-4xl font-bold text-center text-primary">Available GPUS</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {tools
          .map((tools) => <Tool key={tools._id} tools={tools}></Tool>)

          .slice(0, 8)}
      </div>
      <div className="see-more-button flex justify-end mt-4  mx-8">
        <button onClick={() => handleProducts()} className="text-primary see-more">
          See More
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Tools;
