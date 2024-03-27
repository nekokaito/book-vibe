import { useLoaderData, useParams } from "react-router-dom";
import Tags from "../../components/tags/Tags";
import { dataLoadFromReadStorage, dataLoadFromWishStorage } from "../../../utility/localstorage";
import { Toaster } from "react-hot-toast";


const BookAbout = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.bookId == bookId);
    const { bookName, author, image, category, tags, rating, review, totalPages, yearOfPublishing, publisher } = book;
   
    const handleReadData = () => {
        dataLoadFromReadStorage(book);
    }
    const handleWishData = () => {
        dataLoadFromWishStorage(book);
    }



    return (
        
        <div className="my-10 flex justify-center items-center">
                <Toaster></Toaster>
            <div className="flex items-start gap-12">
                {/* image div */}
                <div className=" rounded-3xl p-8 bg-gray-100">
                    <img className="h-[500px]" src={image} alt="" />
                </div>

                <div className="flex flex-col gap-6 border p-3 rounded-3xl">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-extrabold">{bookName}</h1>
                        <p>By: {author}</p>
                    </div>

                    <hr />
                    <h4>{category}</h4>
                    <hr />
                    <p> <span className="font-bold">Review: </span>{review}</p>
                    <span className="flex my-2 items-center gap-2"><p>Tags: </p> {
                        tags.map((tag, i) => <Tags key={i} tag={tag}></Tags>)}</span>

                        <hr />

                        <div className="w-[250px] flex flex-col gap-3">
                            <span className="flex items-center justify-between"> <p>Number of Pages: </p> <p className=" font-bold">{totalPages}</p></span>
                            <span className="flex items-center justify-between"> <p>Publisher: </p> <p className=" font-bold">{publisher}</p></span>
                            <span className="flex items-center justify-between"> <p>Year of Publishing: </p> <p className=" font-bold">{yearOfPublishing}</p></span>
                            <span className="flex items-center justify-between"> <p>Rating: </p> <p className=" font-bold">{rating}</p></span>
                            
                        </div>

                        <div className="flex items-center gap-3">
                            <button onClick={handleReadData} className="btn">Read</button>
                            <button onClick={handleWishData} className="btn bg-sky-300">Wishlist</button>
                        </div>


                </div>




            </div>



        </div>
    );
};

export default BookAbout;