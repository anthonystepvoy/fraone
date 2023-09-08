import { usersSayBack, usersSayBackRes, wavesPattern } from "../assets/images";
import ClientCard from "../components/ClientCard";
const CustomerReviews = () => {
  return (
    <section className="flex our-features bg-black z-10">
              <div className="xl:mt-[160px] mt-20 w-full xl:h-[650px] md:h-[840px] h-[780px] bg-white absolute z-0"></div>
      <div className="w-full xl:h-[800px] z-0 max-container">
        <img
          src={usersSayBack}
          alt="Back"
          className="features-back-lg xl:w-full"
        />
        <img
          src={usersSayBackRes}
          alt="Back Res"
          className="w-full lg:hidden"
        />

        <div className="images flex flex-1 md:flex-row flex-col z-20 justify-between xl:gap-12 xl:mt-12 xl:px-36 px-6">
          <ClientCard />
        </div>
        <div className="waves-pattern flex flex-1 -mt-[400px] w-full">
        <img src={wavesPattern} alt="" className="w-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
