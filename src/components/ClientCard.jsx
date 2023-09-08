import { clients } from "../constants";

const ClientCard = () => {
  return (
    <div className="flex flex-1 xl:flex-row flex-col justify-center items-center gap-12">
      <div className="flex flex-col justify-center items-center w-[350px] xl:h-[350px] h-[200px] bg-white inner-border-2 inner-border-main-purple rounded-2xl shadow-lg gap-2 px-2 py-2 hover:-mt-6 hover:bg-main-purple text-main-black hover:text-white cursor-pointer transition-all">
        <img
          src={clients[0].pfpImg}
          alt="pfp"
          className="flex justify-center w-[100px] h-[100px] rounded-full"
        />
        <h1 className="font-montserrat text-2xl font-bold ">
          {clients[0].name}
        </h1>
        <p className="font-montserrat text-lg text-center">
          {clients[0].opinion}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-[350px] xl:h-[350px] h-[200px] bg-white inner-border-2 inner-border-main-purple rounded-2xl shadow-lg gap-2 px-2 py-2 hover:-mt-6 hover:bg-main-purple text-main-black hover:text-white cursor-pointer transition-all">
        <img
          src={clients[1].pfpImg}
          alt="pfp"
          className="flex justify-center w-[100px] h-[100px] rounded-full"
        />
        <h1 className="font-montserrat text-2xl font-bold ">
          {clients[1].name}
        </h1>
        <p className="font-montserrat text-lg  text-center">
          {clients[1].opinion}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-[350px] xl:h-[350px] h-[200px] bg-white inner-border-2 inner-border-main-purple rounded-2xl shadow-lg gap-2 px-2 py-2 hover:-mt-6 hover:bg-main-purple text-main-black hover:text-white cursor-pointer transition-all">
        <img
          src={clients[2].pfpImg}
          alt="pfp"
          className="flex justify-center w-[100px] h-[100px] rounded-full"
        />
        <h1 className="font-montserrat text-2xl font-bold ">
          {clients[2].name}
        </h1>
        <p className="font-montserrat text-lg  text-center">
          {clients[2].opinion}
        </p>
      </div>
    </div>
  );
};

export default ClientCard;
