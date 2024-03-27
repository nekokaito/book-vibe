import { useLoaderData } from "react-router-dom";
import ListCard from "../../components/cards/ListCard";


const Read = () => {
    const books = useLoaderData();
    
    return (
        <div>
           {
            books.map((book,id) => <ListCard key={id} book={book}></ListCard> )
           } 
           
        </div>
    );
};

export default Read;