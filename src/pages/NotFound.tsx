import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-2'>
            <h1 className='text-4xl font-bold'> <span className='text-red-500'>404 </span>Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or return to the home page.</p>
            <Link className='text-blue-500 hover:underline' to="/">Go to Home</Link>
        </div>
    );
};

export default NotFound;