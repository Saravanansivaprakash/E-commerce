import React from "react";

const FailureView = ({ handleClickRetry }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white m-auto flex flex-col justify-center items-center">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-assess-failure-img.png"
          alt="failure view"
          className="w-1/3"
        />
        <h1 className="">Something went wrong</h1>
        <p className="">Our servers are busy please try again</p>
        <button
          type="button"
          className="px-3 py-2 bg-blue-700 text-white rounded-md mt-10"
          onClick={handleClickRetry}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default FailureView;
