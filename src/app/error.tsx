"use client";

import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        {/* Error heading */}
        <h2 className="mb-4 text-3xl font-semibold text-red-500">
          Oops! Something went wrong.
        </h2>
        {/* Error description */}
        <p className="mb-8 text-lg text-gray-600">
          Please refresh the page and check if the error still persists.
        </p>
        {/* Refresh button */}
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          onClick={() => window.location.reload()} // Reloads the page when clicked
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
