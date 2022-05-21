import { DocumentIcon, PlusIcon } from "@heroicons/react/solid";
import { ViewGridIcon } from "@heroicons/react/outline";
import Card from "../Components/Card";




const Discussion = () => {
  return (
    <div className="m-10 mr-[6rem]">
      <div className="flex justify-end my-7">
        <button className="flex min-w-[200px] justify-center items-center transition-all border border-blue-600 bg-blue-600 py-2 px-6 rounded-xl my-4  text-white hover:border hover:border-blue-600 hover:bg-transparent  hover:text-blue-600">
          <PlusIcon className="w-4 mr-2" />
          <span>Discussion Room</span>
        </button>
      </div>
      <div className="flex p-3 bg-gray-100 rounded-xl w-full">
        <h3 className=" flex items-center  justify-center text-xl font-semibold text-gray-500">
          <ViewGridIcon className="w-6 mr-3" /> <span>Discussion</span>
        </h3>
      </div>
      <div className="grid  lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-6 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Discussion;
