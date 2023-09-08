import { Canvas } from "@react-three/fiber";
import { World } from "../components/World";
import { statistics } from "../constants";

function GlobalPurchase() {
  return (
    <section className="w-full xl:h-[950px] h-[700px] bg-black -z-10">
      <div className="w-full relative z-10  max-container">

      <h1 className="text-white xl:text-8xl text-4xl absolute z-10 font-montserrat font-bold xl:ml-36 ml-8 md:mt-28 mt-4">
        Global purchases, <br />
        just with one card<span className="text-main-purple">.</span>
      </h1>

      <p className="text-gray-400 xl:text-2xl absolute z-10 font-montserrat xl:ml-36 ml-8 xl:mt-[350px] md:mt-[260px] mt-[270px]">
        Fraone makes your shopping easier. <br />
        Time is money, so don't waste your time by using bank app! <br /> Save
        your money here now!
      </p>

      <div className="absolute z-10 xl:mt-[480px] mt-[400px] xl:ml-40 md:ml-20 grid grid-cols-2 justify-center text-center md:w-[700px] xl:gap-16">
        {statistics.map((stat, index) => (
          <div key={index}>
            <p className="xl:text-8xl text-4xl text-white font-palanquin font-bold">
              {stat.value}
            </p>
            <p className="text-2xl mt-6leading-7 font-montserrat text-slate-gray">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
      <div className="xl:absolute xl:-right-28 xl:w-[1000px] xl:h-[1000px] md:h-[700px] h-[500px]">
        <Canvas>
          <World />
        </Canvas>
      </div>
      </div>

    </section>
  );
}

export default GlobalPurchase;
