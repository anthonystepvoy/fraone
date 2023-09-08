import {star } from "../assets/icons";

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[282px] h-[282px] cursor-pointer hover:w-[286px] hover:h-[286px] transition-all' />
        <div className="flex gap-2 mt-4">
            <img src={star} alt="Rating Icon" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
            </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            {price}

        </p>

    </div>
  )
}

export default PopularProductCard