
const Footer = () => {
    return (
        <div className='bg-gray-800 text-white py-10'>
            <div>
                <div className='text-center text-sm'>Follow us on:</div>
                <div className='flex justify-center space-x-4'>
                    <a href="#" className='hover:underline'>Facebook</a>
                    <a href="#" className='hover:underline'>Twitter</a>
                    <a href="#" className='hover:underline'>Instagram</a>
                </div>
            </div>
            <div className='container mx-auto text-center'>
                <p>&copy; 2023 Your Book Library. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;