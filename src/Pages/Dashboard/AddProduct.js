import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "22436f1321e9724d65ad92abe1a69768";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const tool = {
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            description: data.description,
            image: image,
          };
          fetch("https://scrap-management-server-side.onrender.com/tool", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tool),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("new product added");
                reset();
              } else {
                toast.error("there is been a problem adding new tool");

              }
            });
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="your name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="number"
            placeholder="product quantity"
            min={1}
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "quantity is required",
              },
            })}
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="price"
            placeholder=" price"
            className="input input-bordered w-full max-w-xs"
            min={1}
            {...register("price", {
              required: {
                value: true,
                message: "price is required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "description is required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "image is required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input className="btn bg-primary text-white w-full max-w-xs" value="ADD" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;