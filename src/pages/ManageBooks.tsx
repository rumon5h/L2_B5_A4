import React from 'react';
import { Link } from 'react-router';

const ManageBooks = () => {
    return (
        <div className='h-screen'>
            <div className='flex justify-between items-center px-4'>
                <h3 className='text-2xl font-bold  my-5'>Manage Books</h3>
                <Link to="/add-book" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add New Book</Link>
            </div>
        </div>
    );
};

export default ManageBooks;