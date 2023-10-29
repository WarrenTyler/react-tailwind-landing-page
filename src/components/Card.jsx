import { blogImg1 } from "../assets";
import StarRating from "./StarRating";

const Card = ({course}) => {
  return (
    <div className="bg-white drop-shadow-md rounded-2xl overflow-hidden mx-2 my-4">
      <img src={course.linkImg} alt="" className="w-full h-40 object-cover" />
      <div className="p-5 border border-b">
        <h1 className="py-2 truncate">{course.title}</h1>
        <StarRating rating={course.rating} reviews={course.reviews} />
      </div>
      <h3 className="p-5 text-xl">{course.price}</h3>
      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] font-bold rounded">
        {course.category}
      </div>
    </div>
  );
};
export default Card;
