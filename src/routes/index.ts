import App from "@/App";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        Component:App,
        children:[

        ]
    }
]);

export default router;