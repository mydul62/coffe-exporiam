import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
const Popular = () => {
  return (
    <div className=" grid gap-6 grid-cols-1 md:grid-cols-2">
      <div className=" bg-[#F5F4F1] flex justify-between rounded-xl hover:scale-105 duration-500 items-center px-12 py-6">
        <div>
          <img src="/1.png" alt="" />
        </div>
        <div className=" space-y-3">
          <h2 className="text-xl font-Rancho  text-[#1B1A1AB3]">
            <span className=" text-xl font-Raleway text-[#1B1A1A]">Name: </span>
            Americano Coffee
          </h2>
          <h2 className="text-xl font-Rancho  text-[#1B1A1AB3]">
            <span className=" text-xl font-Raleway text-[#1B1A1A]">Chef: </span>
            Mr. Maltin Paul
          </h2>
          <h2 className="text-xl font-Rancho  text-[#1B1A1AB3]">
            <span className=" text-xl font-Raleway text-[#1B1A1A]">price: </span>
            890tk
          </h2>
        </div>
        <div className=" flex gap-3 flex-col">
          <button className=" rounded-md p-3 bg-[#D2B48C]">
            <FaEye color="white" size={20} />
          </button>
          <button className=" rounded-md p-3 bg-[#3C393B]">
            <MdOutlineEdit color="white" size={20} />
          </button>
          <button className=" rounded-md p-3 bg-[#EA4744]">
            <MdOutlineDeleteOutline color="white" size={20}></MdOutlineDeleteOutline>
          </button>
        </div>
      </div>
      <div className=" bg-[#F5F4F1] flex justify-between rounded-xl items-center px-12 py-6 hover:scale-105 duration-500">
        <div>
          <img src="/1.png" alt="" />
        </div>
        <div className=" space-y-3">
          <h2 className="text-xl font-Rancho  text-[#1B1A1AB3]">
            <span className=" text-xl font-Raleway text-[#1B1A1A]">Name: </span>
            Americano Coffee
          </h2>
          <h2 className="text-xl font-Rancho  text-[#1B1A1AB3]">
            <span className=" text-xl font-Raleway text-[#1B1A1A]">Chef: </span>
            Mr. Maltin Paul
          </h2>
          <h2 className="text-xl font-Rancho  text-[#1B1A1AB3]">
            <span className=" text-xl font-Raleway text-[#1B1A1A]">price: </span>
            890tk
          </h2>
        </div>
        <div className=" flex gap-3 flex-col">
          <button className=" rounded-md p-3 bg-[#D2B48C]">
            <FaEye color="white" size={20} />
          </button>
          <button className=" rounded-md p-3 bg-[#3C393B]">
            <MdOutlineEdit color="white" size={20} />
          </button>
          <button className=" rounded-md p-3 bg-[#EA4744]">
            <MdOutlineDeleteOutline color="white" size={20}></MdOutlineDeleteOutline>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
