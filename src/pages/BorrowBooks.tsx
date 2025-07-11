import Loading from '@/components/Loading';
import { useGetBorrowBooksQuery } from '@/redux/api/baseApi';
import type { iBorrow } from '@/types';

const BorrowBooks = () => {
    const {data, isLoading} = useGetBorrowBooksQuery(undefined);

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='h-screen px-5'>
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
                    {data?.success && data?.data?.map((item:iBorrow, index: number) => (
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