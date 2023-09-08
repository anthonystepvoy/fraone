import { headerLogoWhite } from "../assets/images";
import { navLinks } from "../constants";
import { socialMedia } from "../constants";
const Footer = () => {
  return (
    <div className="w-full xl:h-[450px] md:h-[320px] h-[620px] md:-mt-32">
      <div className="flex flex-1 md:flex-row flex-col justify-between items-center xl:w-[80%] md:w-[95%] mx-auto  max-container">
        <div className="xl:mt-20 mt-8">
          <img
            className="xl:w-[200px] w-[100px]"
            src={headerLogoWhite}
            alt=""
          />
          <p className="xl:mt-8 mt-2 font-montserrat text-gray-500 xl:text-xl">
            Fraone makes your shopping easier. <br />
            Time is money, so don't waste your time <br />
            by using bank app!
          </p>
        </div>
        <div>
          <ul className="xl:flex-1 grid xl:grid-cols-2 md:grid-cols-1 xl:mt-20 mt-12 justify-center items-center text-center xl:gap-12 md:gap-2 gap-4 xl:text-gray-600 text-main-purple uppercase xl:-ml-16">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat font-bold hover:text-main-purple xl:leading-normal text-2xl "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:mt-20 mt-14">
          <h1 className="font-montserrat xl:text-[40px] md:text-[20px] text-2xl font-medium text-gray-200">
            Subscribe Our Newsletter:
          </h1>
          <input
            className="xl:w-[400px] md:w-[250px] mt-4 appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight text-2xl font-montserrat focus:outline-none"
            type="text"
            placeholder="Your email here"
          />
          <hr />
        </div>
      </div>
      <hr className="hr-footer w-[60%] mx-auto mt-12 -mb-7 opacity-20"/>
      <div className="flex md:flex-1 flex-row justify-center xl:gap-40 px-28 items-center gap-5 xl:mt-20 mt-14 cursor-pointer  max-container">
        {socialMedia.map((icon) => (
          <div
            className="flex justify-center items-center w-12 h-12 bg-gray-300 hover:bg-main-purple rounded-full"
            key={icon.alt}
          >
            <img src={icon.src} alt={icon.alt} width={24} height={24} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
