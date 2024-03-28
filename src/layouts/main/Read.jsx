/* eslint-disable no-unused-vars */
import ListCard from "../../components/cards/ListCard";
import { useEffect, useState } from "react";


const Read = () => {
    const [books, setBooks] = useState([]);
    const [sortBy, setSortBy] = useState(() => {
        return localStorage.getItem("sortBy") || 'title';
    });
    useEffect(() => {
        localStorage.setItem("sortBy", sortBy);
    }, [sortBy]);
    
    useEffect(()=>{
        const book = JSON.parse(localStorage.getItem("booksRead")) || [];
        const sortedBooks = [...book].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return 1;
            if (a[sortBy] > b[sortBy]) return -1;
            return 0;
        });
        setBooks(sortedBooks);
    },[sortBy])

    return (
        <div className="">
            {books.length === 0 ? (
                <div className="text-center my-10 text-2xl text-gray-500">No books have been added to the ReadList :(</div>
            ) : (
                <div>
                    <div className="flex my-5 justify-center">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn bg-[#8ed7dd]  m-1">Sort By</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={() =>  setSortBy('rating')}>Rating</a></li>
                                <li><a onClick={() =>  setSortBy('totalPages')}>Number of Pages</a></li>
                                <li><a onClick={() =>  setSortBy('yearOfPublishing')}>Publisher Year</a></li>
                            </ul>
                        </div>
                    </div>
                    {books.map((book, id) => <ListCard key={id} book={book}></ListCard>)}
                </div>
            )}
            
            
        </div>
    );
};

export default Read;
