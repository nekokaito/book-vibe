/* eslint-disable no-unused-vars */
import toast, { Toaster } from 'react-hot-toast';
 export const dataLoadFromReadStorage = (book) => {

    const savedData = JSON.parse(localStorage.getItem("booksRead")) || [];
    const isDataHere = savedData.find(i => i.bookId == book.bookId);

    if (isDataHere) {
        toast.error('Already added to Read List!')
    }
    else {
        savedData.push(book);
        localStorage.setItem("booksRead", JSON.stringify(savedData));
    }

};
export const dataLoadFromWishStorage = (book) => {

    const savedData = JSON.parse(localStorage.getItem("booksWish")) || [];
    const isDataHere = savedData.find(i => i.bookId == book.bookId);

    const savedFromReadData = JSON.parse(localStorage.getItem("booksRead")) || [];
    const isDataHereFromRead = savedFromReadData.find(i => i.bookId == book.bookId);

    if (isDataHere  || isDataHereFromRead) {
       
        
        toast.error('Already added to Wish List / Read List!');
    } 
 else {
    if (isDataHere) {
        console.log(isDataHere)
        toast.error('Already added to Wish List!')
    }
    else {
        savedData.push(book);
        localStorage.setItem("booksWish", JSON.stringify(savedData));
    }
 }
   

};