import BookCard from "@/components/book/BookCard";
import Loading from "@/components/Loading";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";

const AllBook = () => {
    const { data, isLoading } = useGetBooksQuery(undefined);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="my-20">
            <h2 className='text-center text-3xl mt-10 mb-1'>Find Your Next Favorite Read.</h2>
            <p className='text-center text-lg mx-4'>Explore a vast collection of books across all genres. From timeless classics</p>
            <p className='text-center text-lg mx-4'> to modern bestsellers, discover, borrow, and enjoy stories that inspire, inform, and entertain.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                {data?.success && data?.data?.map((book: IBook) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default AllBook;