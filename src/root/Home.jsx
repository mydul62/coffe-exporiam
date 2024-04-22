import Banner from "../components/Banner";
import Popular from "../components/PopularProduct/Popular";
import Services from "../components/Services";
import ProductTitle from "../components/shares-components/ProductTitle";


const Home = () => {
  return (
    <div>
      <div>
      <Banner></Banner>
      <Services></Services>
      <div className=" max-w-[1920px] md:w-[70%] w-[90%] mx-auto py-[120px]">
      <ProductTitle heading={"Our Popular Products"} top_head={"--- Sip & Savor ---"} button_text={'Add Coffeen'}></ProductTitle>
      <Popular></Popular>     
      </div>
      </div>
    </div>
  );
};

export default Home;