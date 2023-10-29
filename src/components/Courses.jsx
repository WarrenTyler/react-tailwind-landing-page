import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/courses";

const Courses = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="w-full bg-[#E9F8F3B2] py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-14">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Most Popular <span className="text-[#20B486]">Courses</span>
          </h1>
          <p className="text-[#6D737A]">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
        <Slider {...settings} className="px-2">
          {courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Courses;
