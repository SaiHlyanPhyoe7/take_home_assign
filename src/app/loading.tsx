import { dummyData } from "@/config/constants";
import React from "react";

// loading state before Initial UI is painted on the screen
const loading = () => {
  return (
    <div className="my-4 animate-pulse space-y-12">
      <div className="mx-auto flex h-12 w-11/12 items-center justify-center rounded-md bg-gray-300">
        <div className="m-auto h-4 w-3/12 rounded-md bg-gray-100"></div>
      </div>
      <div className="flex">
        <div className="m-auto h-4 w-3/12 rounded-md bg-gray-300"></div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-y-12">
        {dummyData.map((data) => {
          return (
            <div
              key={data}
              className="col-span-12 space-y-8 md:col-span-6 lg:col-span-4"
            >
              <div className="mx-auto flex h-48 w-11/12 items-center justify-center rounded-md bg-gray-300"></div>
              <div className="mx-auto flex h-6 w-8/12 items-center justify-center rounded-md bg-gray-300"></div>
              <div className="mx-auto flex h-6 w-8/12 items-center justify-center rounded-md bg-gray-300"></div>
              <div className="mx-auto flex h-6 w-8/12 items-center justify-center rounded-md bg-gray-300"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default loading;
