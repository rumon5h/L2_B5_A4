import App from "@/App";
import BookDetails from "@/components/book/BookDetails";
import AddBook from "@/pages/AddBook";
import AllBook from "@/pages/AllBook";
import BorrowBooks from "@/pages/BorrowBooks";
import Home from "@/pages/Home";
import ManageBooks from "@/pages/ManageBooks";
import NotFound from "@/pages/NotFound";
import UpdateBook from "@/pages/UpdateBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: Home
            },
            
            {
                path: 'all-books',
                Component: AllBook
            },
            {
                path: "/all-books/book/:id",
                Component: BookDetails
            },
            {
                path: "add-book",
                Component: AddBook
            },
            {
                path: "borrow-books",
                Component: BorrowBooks
            },
            {
                path: "/manage-books/update-book/:id",
                Component: UpdateBook
            },
           
            {
                path: "manage-books",
                Component: ManageBooks
            },
            {
                path: "*",
                Component: NotFound
            }
        ]
    }
]);

export default router;