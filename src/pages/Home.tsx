import Banner from '@/components/Banner';
import { Link } from 'react-router';
import AllBook from './AllBook';

const Home = () => {

  
  return (
    <div>
      <Banner />


      <div className='flex justify-between items-center p-4 '>
        <p>Read Something New Today</p>
        <Link to="/all-books" className="text-blue-500 hover:underline">All Books</Link>
      </div>

      <AllBook/>

    </div>
  );
};

export default Home;