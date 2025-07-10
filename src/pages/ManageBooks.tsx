import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { useGetBooksQuery } from '@/redux/api/baseApi';
import type { IBook } from '@/types';
import React from 'react';
import { Link } from 'react-router';



const ManageBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  console.log(data)


  if (isLoading) {
    return <Loading />
  }

  const handleDelete = (id: string) => {
    const deleteConfirmed = window.confirm("Are you sure you want to delete this book?");

    if (deleteConfirmed) {
      // Here you would typically make an API call to delete the book
      console.log(`Book with ID ${id} deleted`);
      // After deletion, you might want to refresh the book list or update the state
    }
  }
  return (
    <div className='my-20 px-4'>
      <div className='flex justify-between items-center mb-8'>
        <h3 className='text-2xl font-bold  my-5'>Manage Books</h3>
        <Link to="/add-book" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add New Book</Link>
      </div>

      <div className='flex flex-col items-center'>
        <h4 className='text-xl font-bold my-4'>Book List</h4>
        <table>
          <thead>
            <tr>
              <th className='border-1 border-gray-500 px-4 py-2'>Serial</th>
              <th className='border-1 border-gray-500 px-4 py-2'>Title</th>
              <th className='border-1 border-gray-500 px-4 py-2'>Author</th>
              <th className='border-1 border-gray-500 px-4 py-2'>Genre</th>
              <th className='border-1 border-gray-500 px-4 py-2'>ISBN</th>
              <th className='border-1 border-gray-500 px-4 py-2'>Copies</th>
              <th className='border-1 border-gray-500 px-4 py-2'>Available</th>
              <th className='border-1 border-gray-500 px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.success && data?.data?.map((book: IBook, index: number) => (
              <tr key={book._id}>
                <td className='border px-4 py-2'>{index+1}</td>
                <td className='border px-4 py-2'>{book.title}</td>
                <td className='border px-4 py-2'>{book.author}</td>
                <td className='border px-4 py-2'>{book.genre}</td>
                <td className='border px-4 py-2'>{book.isbn}</td>
                <td className='border px-4 py-2'>{book.copies}</td>
                <td className='border px-4 py-2'>{book.available ? 'Yes' : 'No'}</td>
                <td className='border px-4 py-2'>
                  <Link to={`/manage-books/update-book/${book._id}`} className='text-blue-500 hover:underline'>Edit</Link> |
                  <Button onClick={() => handleDelete(book._id)} className='text-red-500 bg-transparent hover:bg-transparent ml-2 cursor-pointer'>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;