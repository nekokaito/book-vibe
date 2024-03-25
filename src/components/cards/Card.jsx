/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import Tags from "../tags/Tags";

const Card = ({book}) => {
   
    const {bookName, author, image, category, tags ,rating } = book;

    return (
        <div className="">
            <div className="card w-96 bg-base-100  p-5 border">
  <figure className="rounded-2xl bg-gray-200 p-4"><img className=" h-56" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex gap-2 text-green-400">
   {
   tags.slice(0, 2).map( (tag, i) => <Tags key={i} tag={tag}></Tags>)

   }
    </div>
  
    <h2 className="card-title text-2xl">
      {bookName}
     </h2>
     <p className="text-xs">By : {author}</p>
    <hr className="border mt-1 border-dashed border-[#13131326]"></hr>
    <div className="flex justify-center items-center">
      <p>{category}</p>
      <span className="flex gap-2 items-center"> <p>{rating}</p> <CiStar /></span>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;