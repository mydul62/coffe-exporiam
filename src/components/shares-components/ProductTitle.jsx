import { GiCoffeeCup } from "react-icons/gi";
const ProductTitle = ({heading,top_head,button_text}) => {
  return (
    <div className=" flex justify-center mb-12" >
      <div className=" text-center space-y-4">
      <h3 className="text-[#1B1A1A] font-Raleway text-xl">{top_head}</h3>
      <h2 className=" drop-shadow-2xl text-[#331A15] font-Rancho text-[55px] ">{heading && heading}</h2>
     <div className=" flex justify-center">
    {
    button_text &&  <button className="flex gap-1 text-2xl border-2 border-black font-Rancho  items-center bg-[#E3B577] py-3 px-5 ">{button_text} <span><GiCoffeeCup /></span> </button>
    }
     </div>
      </div>
    </div>
  );
};

export default ProductTitle;