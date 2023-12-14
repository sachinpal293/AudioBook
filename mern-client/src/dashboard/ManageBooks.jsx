import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
    }, [])

    // delete books

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/book/${id}`, {
            method: "DELETE",
        }).then(res => res.json).then(data => {
            alert("Book is Deleted Succesfully")
            // setAllBooks(data);
        })
    }
    return (
        <>
            <div className='px-4 my-12 w-full'>
                <h2 className='mb-8 text-3xl font-bold'>Manage Your Book </h2>
                {/* table for book data */}

                <div className='container mt-5 border'>
                    {/* <table className="table table-hover table-responsive table-bordered border-dark text-center text-capitalize"> */}
                    <table className='table-bordered w-full'>
                        <thead className='border-b-2'>
                            <tr>
                                <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-left'>No.</th>
                                <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-left'>Book Name</th>
                                <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-left'>Author Name</th>
                                <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
                                <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-left'>Edit or Delete</th>
                            </tr>
                        </thead>
                        {
                            allBooks.map((book, index) => <tbody className='divide-y' key={book._id}>
                                <tr>
                                    <th scope="row" className='p-3 text-sm tracking-wide text-left'>{index + 1}</th>
                                    <td className='p-3 text-sm tracking-wide text-left'>{book.bookTitle}</td>
                                    <td className='p-3 text-sm tracking-wide text-left'>{book.authorName}</td>
                                    <td className='p-3 text-sm tracking-wide text-left'>{book.category}</td>
                                    <Link to={`/admin/dashboard/edit-books/${book._id}`}>
                                        <td className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 '>Edit</td>
                                    </Link>
                                    <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 ml-5 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                                </tr>
                            </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageBooks
