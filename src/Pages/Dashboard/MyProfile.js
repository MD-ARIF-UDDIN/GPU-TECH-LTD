import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);

  //const { _id, education, phone, location, linkedin } = user;

  const {
    data: displayUser,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch(
      `https://scrap-management-server-side.onrender.com/user?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedUser = {
      phone: event.target.phone.value,
      address: event.target.location.value,
      education: event.target.education.value,
      linkedin: event.target.linkedin.value,
    };

    fetch(
      `https://scrap-management-server-side.onrender.com/updateduser?email=${user.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updatedUser),
      }
    )
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.acknowledged) {
          toast.success("Updated Profile successfully");
          event.target.reset();
          refetch();
        } else {
          toast.error("Failed to update");
        }
      });
  };

  return (
    <div className="mb-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 gap-5">
      <div className="bg-white w-3/4 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-bold text-black">
            Your Profile Info
          </h3>
        </div>
        {user.photoURL && (
          <div className="avatar px-2 flex items-center justify-center">
            <div className=" w-full  lg:w-72 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
        )}

        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Full name</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {user.displayName}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">
                email address
              </dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Phone</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {displayUser.phone}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Location</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {displayUser.address}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">education</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {displayUser.education}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">linkedin</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {displayUser.linkedin}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="w-3/4">
        <h1 className="text-2xl font-bold text-primary">Update Your Profile</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-control">
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
              <span className="label-text">Your location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="your location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">education</span>
            </label>
            <input
              type="text"
              name="education"
              placeholder="your education"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">linkedin</span>
            </label>
            <input
              type="text"
              name="linkedin"
              placeholder="your linkedin"
              className="input input-bordered"
              required
            />
          </div>

          <input
            type="submit"
            value="update"
            className="btn bg-primary text-white w-full max-w-xs mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
