import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router';

const data = [
  {
    _id: "685684ffae705cec1192253c",
    title: "The Theory of Everything 3",
    author: "Stephen Hawking 2",
    genre: "SCIENCE",
    isbn: "978055338016323",
    description: "An overview of cosmology and black holes. 2",
    copies: 5,
    available: true,
    createdAt: "2025-06-21T10:10:07.432Z",
    updatedAt: "2025-06-21T10:10:07.432Z"
  },
  {
    _id: "6856850fae705cec1192253e",
    title: "The Theory of Everything 4",
    author: "Stephen Hawking 4",
    genre: "SCIENCE",
    isbn: "978055338016324",
    description: "An overview of cosmology and black holes.",
    copies: 45,
    available: true,
    createdAt: "2025-06-21T10:10:23.550Z",
    updatedAt: "2025-06-21T10:10:23.550Z"
  },
  {
    _id: "68568520ae705cec11922540",
    title: "The Theory of Everything 5",
    author: "Stephen Hawking 5",
    genre: "SCIENCE",
    isbn: "978055338016325",
    description: "An overview of cosmology and black holes.",
    copies: 25,
    available: true,
    createdAt: "2025-06-21T10:10:40.126Z",
    updatedAt: "2025-06-21T10:10:40.126Z"
  },
  {
    _id: "6856853aae705cec11922543",
    title: "The Theory of Everything 6",
    author: "Stephen Hawking 6",
    genre: "SCIENCE",
    isbn: "978055338016326",
    description: "An overview of cosmology and black holes.",
    copies: 25,
    available: true,
    createdAt: "2025-06-21T10:11:06.654Z",
    updatedAt: "2025-06-21T10:11:06.654Z"
  },
  {
    _id: "68568545ae705cec11922545",
    title: "The Theory of Everything 7",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "978055338016327",
    description: "An overview of cosmology and black holes.",
    copies: 25,
    available: true,
    createdAt: "2025-06-21T10:11:17.408Z",
    updatedAt: "2025-06-21T10:11:17.408Z"
  },
  {
    _id: "6856854dae705cec11922547",
    title: "The Theory of Everything 8",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "97805533801638",
    description: "An overview of cosmology and black holes.",
    copies: 2025,
    available: true,
    createdAt: "2025-06-21T10:11:25.622Z",
    updatedAt: "2025-06-22T05:13:34.063Z"
  },
  {
    _id: "68568555ae705cec11922549",
    title: "The Theory of Everything 9",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "97805533801639",
    description: "An overview of cosmology and black holes.",
    copies: 25,
    available: true,
    createdAt: "2025-06-21T10:11:33.581Z",
    updatedAt: "2025-06-21T10:11:33.581Z"
  },
  {
    _id: "6856863cae705cec11922557",
    title: "The Theory of Everything",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.fff",
    copies: 5,
    available: true,
    createdAt: "2025-06-21T10:15:24.862Z",
    updatedAt: "2025-06-21T10:18:01.893Z"
  },
  {
    _id: "68577a81fd4f92fd9ad6129f",
    title: "The Theory of Everything 33",
    author: "Stephen Hawking 33",
    genre: "FANTASY",
    isbn: "978055338016333",
    description: "An overview of cosmology and black holes.fff",
    copies: 115,
    available: true,
    createdAt: "2025-06-22T03:37:37.464Z",
    updatedAt: "2025-06-22T05:07:19.593Z"
  },
  {
    _id: "6857a289056cd7060077fa91",
    title: "The Theory of Everything 777",
    author: "Stephen Hawking 777",
    genre: "FANTASY",
    isbn: "978055338016777",
    description: "An overview of cosmology and black holes.fff",
    copies: -115,
    available: false,
    createdAt: "2025-06-22T06:28:25.604Z",
    updatedAt: "2025-06-22T06:28:25.604Z"
  },
  {
    _id: "6857a50e6269bc9c59be236f",
    title: "The Theory of Everything 888",
    author: "Stephen Hawking 888",
    genre: "FANTASY",
    isbn: "978055338016888",
    description: "An overview of cosmology and black holes.fff",
    copies: 0,
    available: false,
    createdAt: "2025-06-22T06:39:10.951Z",
    updatedAt: "2025-06-22T06:39:10.951Z"
  },
  {
    _id: "6857a55173627b7830809514",
    title: "The Theory of Everything 21",
    author: "Stephen Hawking 21",
    genre: "FANTASY",
    isbn: "97805533801682188",
    description: "An overview of cosmology and black holes.fff",
    copies: 0,
    available: true,
    createdAt: "2025-06-22T06:40:17.096Z",
    updatedAt: "2025-06-22T06:40:17.096Z"
  },
  {
    _id: "6857a57c8a6e8dc75a64b78a",
    title: "The Theory of Everything 231",
    author: "Stephen Hawking 231",
    genre: "FANTASY",
    isbn: "978055338016832188",
    description: "An overview of cosmology and black holes.fff",
    copies: 0,
    available: false,
    createdAt: "2025-06-22T06:41:00.071Z",
    updatedAt: "2025-06-22T06:41:00.171Z"
  },
  {
    _id: "6857a58d8a6e8dc75a64b82e",
    title: "The Theory of Everything 2231",
    author: "Stephen Hawking 2321",
    genre: "FANTASY",
    isbn: "9780553380168321828",
    description: "An overview of cosmology and black holes.fff",
    copies: 1,
    available: true,
    createdAt: "2025-06-22T06:41:17.385Z",
    updatedAt: "2025-06-22T06:41:17.385Z"
  },
  {
    _id: "6857a5d5f060950276b5a10b",
    title: "The Theory of Everything 431",
    author: "Stephen Hawking 431",
    genre: "FANTASY",
    isbn: "978055321828",
    description: "An overview of cosmology and black holes.fff",
    copies: 1,
    available: true,
    createdAt: "2025-06-22T06:42:29.873Z",
    updatedAt: "2025-06-22T06:42:29.873Z"
  },
  {
    _id: "6857a5e2f060950276b5a10d",
    title: "The Theory of Everything 49831",
    author: "Stephen Hawking 49831",
    genre: "FANTASY",
    isbn: "97889055321828",
    description: "An overview of cosmology and black holes.fff",
    copies: 0,
    available: true,
    createdAt: "2025-06-22T06:42:42.512Z",
    updatedAt: "2025-06-22T06:42:42.512Z"
  },
  {
    _id: "6857a905cac6b333e4ddcd58",
    title: "The Theory of Everything 493831",
    author: "Stephen Hawking 493831",
    genre: "FANTASY",
    isbn: "978890553321828",
    description: "An overview of cosmology and black holes.fff",
    copies: 0,
    available: true,
    createdAt: "2025-06-22T06:56:05.140Z",
    updatedAt: "2025-06-22T06:56:05.140Z"
  },
  {
    _id: "6857a913cac6b333e4ddcd5a",
    title: "The Theory of Everything 4234293831",
    author: "Stephen Hawking 43242",
    genre: "FANTASY",
    isbn: "978890553321822348",
    description: "An overview of cosmology and black holes.fff",
    copies: 9,
    available: true,
    createdAt: "2025-06-22T06:56:19.058Z",
    updatedAt: "2025-06-22T06:56:19.058Z"
  }
];

const ManageBooks = () => {


    const handleDelete = (id: string) => {
        const deleteConfirmed = window.confirm("Are you sure you want to delete this book?");
        
        if (deleteConfirmed) {
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
                        {data.map((book) => (
                            <tr key={book._id}>
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