import { Link } from 'react-router';
import { ModeToggle } from './mode-toggler';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
            <Link to={"/"}>Library</Link>

            <div className='flex space-x-4'>
                <Link to={"/all-books"}>All Books</Link>
                <Link to={"/borrow-books"}>Borrow Summary</Link>
                <Link to={"/manage-books"}>Manage Books</Link>
            </div>
            <ModeToggle />
        </div>
    );
};

export default Navbar;