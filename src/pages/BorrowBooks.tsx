import React from 'react';

const data = [
    {
        totalQuantity: 90,
        book: {
            title: "The Theory of Everything 8",
            isbn: "97805533801638"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
    {
        totalQuantity: 115,
        book: {
            title: "The Theory of Everything 33",
            isbn: "978055338016333"
        }
    },
]

const BorrowBooks = () => {
    return (
        <div className='h-screen'>
            <h2 className='text-center text-3xl mt-10 mb-1'>Borrow Books Summary</h2>



            <table className='min-w-full border-collapse border border-gray-200 py-2 mt-5'>
                <thead className=''>
                    <tr className='border-b border-gray-200'>
                        <th className='text-left border-r-2 border-gray-200 py-3 pl-2'>Serial</th>
                        <th className='text-left border-r-2 border-gray-200 py-3 pl-2'>Book Title</th>
                        <th className='text-left border-r-2 border-gray-200 pl-2 py-3'>ISBN</th>
                        <th className='text-left border-r-2 border-gray-200 pl-2 py-3'>Total Borrowed</th>
                    </tr>
                </thead>  
                <tbody className=''>
                    {data.map((item, index) => (
                        <tr className='border-b border-r-2 border-gray-200' key={index}>
                            <td className='border-r-2 border-gray-200 py-3 pl-2'>{index+1}</td>
                            <td className='border-r-2 border-gray-200 py-3 pl-2'>{item.book.title}</td>
                            <td className='border-r-2 border-gray-200 pl-2 py-3'>{item.book.isbn}</td>
                            <td className='border-r-2 border-gray-200 pl-2 py-3'>{item.totalQuantity}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default BorrowBooks;