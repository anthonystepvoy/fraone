import Button from "../components/Button";
import { cardsHero } from "../assets/images";

const Hero = () => {
  return (
    <section id="home">
      <div className="max-container hero flex xl:flex-row flex-col justify-center items-center">
        <div className="h1-hero flex flex-col left-0 xl:text-left text-center xl:w-[700px] xl:-ml-2 md:mt-8">
          <h1 className="font-palanquin xl:tracking-tighter text-8xl max-sm:text-[62px] font-bold text-main-black xl:-mt-52 xl:-ml-2">
            <span className=" text-main-black leading-[60px]">
              Easy way to
              <br />
              save your
            </span>
            <span className="text-main-purple"> time.</span>
          </h1>
          <p className="font-montserrat xl:text-xl text-md mt-8 text-slate-gray xl:text-start leading-8">
            Fraone makes your shopping easier. <br />
            Time is money, so don't waste your time
            <br /> by using bank app.
            <br />
            <br />
            Save your money here now!
            <br />
          </p>
          <div className="center-p flex flex-row justify-center items-center gap-4 xl:gap-12 xl:w-[480px] mt-12 xl:ml-12">
            <Button label="Get Card" />

            <a
              href="/"
              className="text-center text-xl text-main-purple font-bold"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="card-img xl:-mr-28">
          <img
            src={cardsHero}
            alt="Cards Image"
            className="xl:w-[500px] xl:h-[750px] h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
