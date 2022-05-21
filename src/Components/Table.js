import {
  DotsVerticalIcon,
  EyeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { DocumentIcon } from "@heroicons/react/solid";
import React from "react";

const Table = () => {
  return (
    <div className="grid grid-cols-4 md:overflow-hidden overflow-scroll border-b border-gray-200 py-5">
      <div className="flex items-center ">
        <DocumentIcon className="w-5 mr-2 text-red-600" />
        <h5 className="font-semibold">Document 1</h5>
      </div>
      <div className="flex  flex-col ">
        <span className="text-xs   text-gray-400">update Date</span>
        <span className="text-sm font-semibold text-gray-500">
          April 1,2021
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[60%] bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
        <div className="flex  items-center text-gray-500 my-2">
          <EyeIcon className="w-4 mr-2 " />
          <span>views 600/600</span>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <ShoppingBagIcon className="w-6 cursor-pointer text-green-500" />
        <DotsVerticalIcon className="w-6 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Table;
