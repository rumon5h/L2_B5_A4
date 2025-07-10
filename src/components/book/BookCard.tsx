
const BookCard = () => {
    return (
        <div className=' shadow-md rounded-lg p-4 m-4'>
            <h3 className='text-lg font-semibold mb-2'>Book Title</h3>
            <p className='text-gray-600'>Author: John Doe</p>
            <p className='text-gray-600'>Genre: Fiction</p>
            <p className='text-gray-600'>Description: A fascinating tale of adventure and discovery.</p>

            <div className='flex justify-start gap-3 items-center mt-4'>
                <button className='bg-blue-500 text-white rounded-lg px-4 text-[14px] py-2 mt-4 hover:bg-blue-600'>Borrow Book</button>
                <button className='bg-gray-300 text-gray-700 rounded-lg px-4 text-[14px] py-2 mt-4 hover:bg-gray-400'>View Details</button>
            </div>
        </div>
    );
};

export default BookCard;