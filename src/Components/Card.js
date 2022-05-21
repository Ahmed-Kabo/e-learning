import {
  DocumentTextIcon,
  DotsVerticalIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import User from "../Assets/p.jpg";
import React from "react";

const Card = () => {
  return (
    <>
      <div className="p-4 bg-Neutral-50 rounded-xl border border-gary-200">
        {/* main data */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src={User} alr="/" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col  ml-3 ">
              <h3 className="text-xl font-bold capitalize text-gray-700 ">
                title
              </h3>
              <p className="text-sm text-gray-700 ">discriotipn</p>
            </div>
          </div>
          <div className="flex">
            <ShoppingBagIcon className="w-6 text-green-600 cursor-pointer" />
            <DotsVerticalIcon className="w-6 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* description  */}
        <p className="text-lg text-gray-500 my-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          aliquam iste ratione consequuntur aut repellat id saepe cumque tenetur
          deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rem, assumenda.
        </p>
        {/* dates */}
        <div className="flex items-center justify-between py-4 border-y border-gray-200 my-4">
          <div className="flex flex-col ">
            <span className="text-sm text-gray-400 font-bold">
              Current Date :
            </span>
            <span className="text-md text-gray-600 font-semibold ">
              20/5/2022
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 font-bold">
              Current Date :
            </span>
            <span className="text-md text-gray-600  font-semibold">
              20/5/2022
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 font-bold">
              Current Date :
            </span>
            <span className="text-md text-gray-600 font-semibold ">
              20/5/2022
            </span>
          </div>
        </div>
        {/* avaters  */}
        <div className="flex justify-between items-center my-2">
          <img src={User} alr="/" className="w-10 h-10 rounded-full" />
          <div class="flex">
            <DocumentTextIcon className="w-6 text-gray-500 mr-2" />{" "}
            <span>36</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
