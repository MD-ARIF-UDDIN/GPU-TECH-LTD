import React from "react";

const Contact = () => {
  return (
    <div className=" mt-12 mb-12">
      <h1 className="text-center text-4xl font-bold text-primary">Contact With Us</h1>
      <div className="w-full mt-6 md:w-96 md:max-w-full mx-auto">
        <div className="p-6 mt-4 border border-gray-300 sm:rounded-md">
          <form method="POST">
            <label className="block mb-6">
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Email address</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
              block
              w-full
              mt-1
              border-primary
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                rows="3"
                placeholder="type your message"
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="
              h-10
              px-5
              btn btn-primary
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
