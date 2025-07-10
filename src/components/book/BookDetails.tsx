
const book = {
    _id: "685684ffae705cec1192253c",
    title: "The Theory of Everything 3",
    author: "Stephen Hawking 2",
    genre: "SCIENCE",
    isbn: "978055338016323",
    description: "An overview of cosmology and black holes. 2",
    copies: 5,
    available: true,
}

const BookDetails = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto mt-10">
            <h4>Book Details</h4>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Copies:</strong> {book.copies}</p>
            <p><strong>Available:</strong> {book.available ? "Yes" : "No"}</p>
        </div>
        </div>
    );
};

export default BookDetails;