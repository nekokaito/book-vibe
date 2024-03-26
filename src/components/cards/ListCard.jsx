/* eslint-disable react/prop-types */
import Tags from "../tags/Tags";
import { CiLocationOn } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { RiPagesLine } from "react-icons/ri";

const ListCard = ({ book }) => {
    const { bookName, author, image, category, tags, rating, publisher, yearOfPublishing, totalPages } = book;
    return (
        <div className="border rounded-2xl p-5 mt-4 w-full">
            <div className="flex gap-2">
                <div className="w-48"><img src={image} alt="" /></div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{bookName}</h3>
                    <p>By: {author}</p>
                    <div className="flex gap-2 items-center">Tags: <span className="flex gap-1">{
                        tags.slice(0, 2).map((tag, i) => <Tags key={i} tag={tag}></Tags>)}</span> <CiLocationOn /><p>Year of Publishing: {yearOfPublishing}</p></div>
                        <div className="flex items-center gap-5">
                            <span className="flex items-center gap-1">
                            <TbUsers /> <p>Publisher: {publisher}</p>
                            </span>
                            <span className="flex items-center gap-1">
                            <RiPagesLine /> <p>Page: {totalPages }</p>
                            </span>
                         </div>
                         <hr />
                         <div className="flex gap-4">
                            <button className="btn hover:bg-[#328EFF26] border-none bg-[#328EFF26] text-[#328EFF] rounded-3xl">Category: {category}</button>
                            <button className="btn hover:bg-[#FFAC3326] border-none bg-[#FFAC3326] text-[#FFAC33] rounded-3xl">Rating: {rating}</button>
                            <button className="btn  bg-green-500 text-white rounded-3xl">View Details</button>

                            
                         </div>
            </div>

            </div>
        </div>
    );
};

export default ListCard;