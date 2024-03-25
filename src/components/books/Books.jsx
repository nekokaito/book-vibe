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
        <h1 className="text-center my-10 text-4xl font-bold">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            {
                books.map(book => <Card key={book.id} book={book}></Card> )
            }
        </div>
        
       </section>
    );
};

export default Books;