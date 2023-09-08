import { storesLogos, phones } from "../assets/images";
const MobileApp = () => {
  return (
    <section className="mobile-app xl:mt-6 mt-20 xl:mb-0 w-full bg-gradient-to-b from-white to-main-black xl:h-[800px] h-[700px] max-container">
      <div className="flex flex-1 xl:flex-row flex-col xl:justify-between justify-items-center gap-8 w-full xl:h-[800px] md:h-[600px] bg-main-purple xl:rounded-[80px] rounded-[40px]">
        <div className="justify-center items-center ml-6 xl:ml-24 xl:mt-12 xl:h-[600px]">
          <div className="flex mt-8 rounded-[35px] bg-white w-52 h-16">
            <div className="rounded-full w-4 h-4 bg-main-purple mt-6 ml-6"></div>
            <span className="flex ml-4 items-center text-center text-xl font-montserrat font-bold text-main-purple">
              {" "}
              Mobile App
            </span>
          </div>
          <h1 className="flex xl:text-[65px] md:text-[70px] text-[38px] xl:mt-12 mt-6 font-montserrat font-medium text-white tracking-tighter xl:leading-[60px] md:leading-[70px]">
            Easier way <br />to keep an 
            eye<br /> on your money?
          </h1>
          <p className="flex flex-1 text-white font-montserrat text-2xl xl:mt-20 mt-6">
            Download our app now!
          </p>
          <img
            className="mt-6 xl:h-[85px] xl:w-[500px] w-[350px] "
            src={storesLogos}
            alt=""
          />
        </div>

          <img
            className="xl:mt-[92px] xl:w-[750px] xl:h-[580px] w-[300px] xl:ml-0 md:ml-[450px] md:-mt-[170px] -mt-2 ml-12 "
            src={phones}
            alt=""
          />
      </div>
    </section>
  );
};

export default MobileApp;
