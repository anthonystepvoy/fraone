import { cardDesign } from "../assets/images";
import Button from "../components/Button";
import { computerMouse } from "../assets/icons";

const CardDesign = () => {
  return (
    <section id="card-design" className=" ">
      <div className="flex flex-1 flex-col justify-center items-center mb-28">
        <p className="scroll-breath md:mt-38 xl:-mt-20 mt-12 w-[150px] text-center font-montserrat text-lg">
          Scroll Down
        </p>
        <img
          src={computerMouse}
          alt="Mouse"
          className="scroll-breath mt-2"
          height={50}
          width={50}
        />
      </div>
      <div className="flex xl:flex-row flex-col justify-center gap-5">
        <h2 className="text-[80px] text-4xl text-main-black leading-[70px] font-palanquin font-bold text-center tracking-tighter xl:mt-32">
          Create
          <span className="text-main-purple"> your own</span> <br /> card design
        </h2>

        <img
          src={cardDesign}
          alt="Card Design"
          height={700}
          width={600}
          className="w-[600px] xl:h-[400px] md:ml-[60px] mt-8 xl:ml-8"
        />
      </div>
      <p className="text-center font-montserrat xl:text-2xl text-xl mt-12 text-gray-600 leading-[30px]">
        Got design inspiration? Are you creative? <br />
        <br /> Make your own card now! <br />
        <br />
        Either vertical or horizontal card it doesn't matter!
      </p>
      <div className="flex justify-center items-center mt-14">
        <Button label="Create Now" />
      </div>
    </section>
  );
};

export default CardDesign;
