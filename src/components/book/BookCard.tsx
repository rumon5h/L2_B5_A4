import type { IBook } from "@/types";
import { Link } from "react-router";
import BorrowBookModal from "./BorrowBookModal";



const BookCard = ({ book }: { book: IBook }) => {
    return (
        <div className=' shadow-md rounded-lg p-4 m-4'>
            <h3 className='text-lg font-semibold mb-2'>{book.title}</h3>
            <p className='text-gray-600'>Author: {book.author}</p>
            <p className='text-gray-600'>Genre: {book.genre}</p>
            <p className='text-gray-600'>Description: {book.description.slice(0,100)}...</p>

            <div className='flex justify-start gap-3 items-center mt-4'>
                <BorrowBookModal/>
                <Link to={`/all-books/book/${book._id}`} className='bg-gray-300 text-gray-700 rounded-lg px-4 text-[14px] py-2  hover:bg-gray-400'>View Details</Link>
            </div>
        </div>
    );
};

export default BookCard;