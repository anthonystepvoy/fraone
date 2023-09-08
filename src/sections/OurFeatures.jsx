import {
  ourFeaturesBack,
  privacityTakeCare,
  paymentMethod,
  globalCurrencies,
  ourFeaturesBackRes,
} from "../assets/images";

// bg-gradient-to-b from-main-purple to-black

const OurFeatures = () => {
  return (
    <section className="our-features">
      <img
        src={ourFeaturesBack}
        alt="Back"
        className="flex justify-center max-container features-back-lg z-0 "
      />
      <img
        src={ourFeaturesBackRes}
        alt="Back Res"
        className="z-0 w-full lg:hidden"
      />
      <div className="w-full bg-gradient-to-b from-main-purple to-black xl:h-[800px] md:h-[500px] h-[1100px] ">
        <div className="flex xl:flex-row flex-col z-10 px-16 items-center justify-center xl:gap-60 xl:h-[200px]">
          <h1 className="flex md:text-[50px] xl:w-[500px] md:w-full w-[300px] md:-mt-12 -mt-8 xl:-mt-24 text-3xl text-white font-montserrat font-semibold md:leading-[60px] leading-8">
            All of the cool <br className="md:hidden"/>
            features you need
          </h1>

          <p className="flex justify-end text-white right-0 text-center md:w-[500px] md:mb-6 w-[300px] mt-2 font-montserrat xl:text-[26px] xl:-mt-12">
            Fraone makes your shopping easier. <br /> Time is money, so don't
            waste your time by using bank app!
          </p>
        </div>

        <div className="images flex flex-1 max-container md:flex-row flex-col xl:px-36 gap-12 mt-4 z-20 md:justify-center items-center">
          <img
            src={privacityTakeCare}
            alt=""
            className="cursor-pointer flex xl:w-[420px] xl:h-[500px] md:w-[220px] md:h-[270px] w-[300px] h-[350px]"
          />

          <img
            src={paymentMethod}
            alt=""
            className="cursor-pointer flex xl:h-[320px] xl:w-[400px]  md:w-[240px] md:h-[200px] w-[300px] h-[250px]"
          />

          <img
            src={globalCurrencies}
            alt=""
            className="transition-all cursor-pointer flex xl:h-[360px] xl:w-[420px] md:w-[220px] md:h-[200px] w-[300px] h-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
