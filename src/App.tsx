import { Outlet } from "react-router"
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
