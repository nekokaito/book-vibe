
import ListCard from "../../components/cards/ListCard";
import { useEffect, useState } from "react";


const Read = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("booksRead")) || [];
        setBooks(data);
    }, [])
    
    return (
        <div>
           {
            books.map((book,id) => <ListCard key={id} book={book}></ListCard>)
           } 
           
        </div>
    );
};

export default Read;