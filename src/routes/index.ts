import App from "@/App";
import AddBook from "@/pages/AddBook";
import AllBook from "@/pages/AllBook";
import BorrowBooks from "@/pages/BorrowBooks";
import Home from "@/pages/Home";
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
                path: "add-book",
                Component: AddBook
            },
            {
                path: "borrow-book",
                Component: BorrowBooks
            },
            {
                path: "update-book",
                Component: UpdateBook
            },
            {
                path: "*",
                Component: NotFound
            }
        ]
    }
]);

export default router;