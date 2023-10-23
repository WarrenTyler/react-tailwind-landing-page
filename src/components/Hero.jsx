import { heroImg } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="m-auto grid max-w-[600px] md:grid-cols-2 md:max-w-[1480px]">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#20B486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="text-5xl md:text-6xl md:leading-[72px] font-semibold py-2">
            Access To <span className="text-[#20B486]">5000+</span> Courses from <span className="text-[#20B486]">300</span> Instructors & Institutions
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <form
            action=""
            className="flex justify-between max-w-[700px] py-4 border rounded-md bg-white hero-searchbox-shadow"
          >
            <input
              type="text"
              className="bg-white"
              placeholder="What do want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img src={heroImg} alt="" className="order-first md:order-last" />
      </div>
    </div>
  );
};
export default Hero;
