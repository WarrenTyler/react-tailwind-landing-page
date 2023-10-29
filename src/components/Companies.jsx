import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";

const Companies = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="max-w-[600px] md:max-w-[1480px] m-auto px-4 md:px-0">
        <h1 className="text-center text-2xl font-bold text-[#536E95] pb-1">
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className="text-center text-xl text-[#536E95]">
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
        <div className="flex justify-center py-8 md:gap-8">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <img src={companyLogo1} alt="" />
            <img src={companyLogo2} alt="" />
            <img src={companyLogo3} alt="" />
            <img src={companyLogo4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Companies;
