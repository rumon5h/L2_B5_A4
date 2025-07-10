import { Link } from "react-router";

const Banner = () => {
    return (
        <div className={`text-black dark:text-white p-6 text-center flex flex-col h-[80vh] justify-center `}>
            <h1 className="text-2xl mb-2 font-bold">Welcome to the Library</h1>
            <p className="text-lg">Your one-stop solution for all your book needs! </p>
            <Link to={"/all-books"} className="mt-4 inline-block  bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded  w-fit mx-auto">
                Explore Books
            </Link>
        </div>
    );
};

export default Banner;