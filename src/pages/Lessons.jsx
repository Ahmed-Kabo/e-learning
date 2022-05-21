import { PlusIcon, ViewGridIcon } from "@heroicons/react/outline";
import {
  DotsVerticalIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/solid";
import React from "react";
import Table from "../Components/Table";

const Lessons = () => {
  return (
    <div className="m-10 mr-[6rem]">
      <div className="flex justify-end my-7">
        <button className="flex min-w-[200px] justify-center items-center transition-all border border-blue-600 bg-blue-600 py-2 px-6 rounded-xl my-4  text-white hover:border hover:border-blue-600 hover:bg-transparent  hover:text-blue-600">
          <PlusIcon className="w-4 mr-2" />
          <span>Discussion Room</span>
        </button>
      </div>
      <div className="flex items-center  justify-between p-3 bg-gray-100 rounded-xl w-full">
        <h3 className=" flex  items-center  justify-center text-xl font-semibold text-gray-500">
          <ViewGridIcon className="w-6 mr-3" /> <span>Unit One </span>
        </h3>
        <div className="flex">
          <ShoppingBagIcon className="w-6 text-gray-500 cursor-pointer" />
          <PlusCircleIcon className="w-6 text-gray-500 cursor-pointer" />
          <DotsVerticalIcon className="w-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
      {/* lesson plane  */}
      <div className="flex items-center justify-between my-7">
        <h3 className="font-bold text-md text-gray-600">Lessons</h3>
        <DotsVerticalIcon className="w-6 text-gray-500 cursor-pointer" />
      </div>
      {/* table */}
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
    </div>
  );
};

export default Lessons;
