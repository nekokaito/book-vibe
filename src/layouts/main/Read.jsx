import { useLoaderData } from "react-router-dom";
import ListCard from "../../components/cards/ListCard";


const Read = () => {
    const books = useLoaderData();
    
    return (
        <div>
           {
            books.map((book,id) => <ListCard key={id} book={book}></ListCard> )
           } 
           <p>{books.length}</p>
        </div>
    );
};

export default Read;