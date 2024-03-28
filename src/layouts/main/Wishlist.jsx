// import { doSort } from "../../../utility/sort";
import ListCard from "../../components/cards/ListCard";
import { useEffect, useState } from "react";


const Wishlist = () => {
    const [books, setBooks] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [sortBy, setSortBy] = useState ('title');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("booksWish")) || [];
        setBooks(data);
    }, [])

    const doWishSort = (field) => {
        setSortBy(field);
        const sortedBooks = [...books].sort((a, b) => {
          if (a[field] < b[field]) return 1;
          if (a[field] > b[field]) return -1;
          return 0;
        });
        setBooks(sortedBooks);
    }
    
    return (
        <div>
           <div className="flex my-5 justify-center">
            <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onClick={()=> doWishSort('rating')}>Rating</a></li>
    <li><a onClick={()=> doWishSort('totalPages')}>Book Pages</a></li>
    <li><a onClick={()=> doWishSort('yearOfPublishing')}>Published Year</a></li>
  </ul>
    </div>

            </div>
           {
            books.map((book,id) => <ListCard key={id} book={book}></ListCard> )
           } 
           
        </div>
    );
};

export default Wishlist;