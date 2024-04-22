

const Banner = () => {
  return (
    <div className=" ">
      <div className="hero border-b-4 border-green-600 min-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/SRMPpVV/6.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" max-w-[1920px] md:w-[70%] w-[90%] mx-auto flex justify-end text-center text-neutral-content">
    <div className=" w-[65%]  text-left space-y-4">
      <h1 className="font-Rancho tracking-normal text-[#FFFFFF] text-[38px]">Would you like a Cup of Delicious Coffee?</h1>
      <p className="font-Raleway text-[16px]  ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className=" float-start">
      <button className="bg-[#E3B577] py-3 px-5 text-2xl font-Rancho text-[#242222] ">Learn More</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;