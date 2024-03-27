import { useLoaderData, useParams } from "react-router-dom";
import Tags from "../../components/tags/Tags";


const BookAbout = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.bookId == bookId);
    const { bookName, author, image, category, tags, rating, review, totalPages, yearOfPublishing } = book;
    console.log(book);
    return (
        <div>

            <div className="flex items-start">
                {/* image div */}
                <div>
                    <img src={image} alt="" />
                </div>

                <div>
                    <div>
                        <h1>{bookName}</h1>
                        <p>By: {author}</p>
                    </div>

                    <hr />
                    <h4>{category}</h4>
                    <hr />
                    <p>Review: {review}</p>
                    <span className="flex items-center gap-2"><p>Tags: </p> {
                        tags.map((tag, i) => <Tags key={i} tag={tag}></Tags>)}</span>

                        <hr />

                        <div>
                            <span className="flex items-center gap-4"> <p>Number of Pages: </p> <p className=" font-bold">{totalPages}</p></span>
                            <span className="flex items-center gap-4"> <p>Publisher: </p> <p className=" font-bold">{totalPages}</p></span>
                            <span className="flex items-center gap-4"> <p>Year of Publishing: </p> <p className=" font-bold">{yearOfPublishing}</p></span>
                            <span className="flex items-center gap-4"> <p>Rating: </p> <p className=" font-bold">{rating}</p></span>
                            
                        </div>


                </div>




            </div>



        </div>
    );
};

export default BookAbout;