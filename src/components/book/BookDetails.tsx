import { useParams } from "react-router";
import BorrowBookModal from "./BorrowBookModal";
import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import Loading from "../Loading";
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const BookDetails = () => {
    const {id} = useParams();

    const {data,isLoading} = useGetBookByIdQuery(id);

    console.log(data)

    if(isLoading){
        return <Loading/>
    }

    

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto mt-10">
            <h4>Book Details</h4>
            <p><strong>Title:</strong> {data?.data?.title}</p>
            <p><strong>Author:</strong> {data?.data?.author}</p>
            <p><strong>Genre:</strong> {data?.data?.genre}</p>
            <p><strong>ISBN:</strong> {data?.data?.isbn}</p>
            <p><strong>Description:</strong> {data?.data?.description}</p>
            <p><strong>Copies:</strong> {data?.data?.copies}</p>
            <p className="mb-5"><strong>Available:</strong> {data?.data?.available ? "Yes" : "No"}</p>
            {
                data?.data?.available && <BorrowBookModal id={data?.data?._id}/>
            }
        </div>
        </div>
    );
};

export default BookDetails;