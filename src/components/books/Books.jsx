import { useEffect, useState } from "react";
import Card from "../cards/Card";


const Books = () => {
       const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
        .then (res => res.json())
        .then (data => setBooks(data))
    }, [])
    
    console.log(books)
    return (
       <section className="my-16">
        <h1>Books</h1>
        <div>
            {
                books.map(book => <Card key={book.id} book={book}></Card> )
            }
        </div>
        
       </section>
    );
};

export default Books;