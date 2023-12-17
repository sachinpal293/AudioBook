import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
    }, [])
    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h1 className='text-5xl font-bold text-center'>
                All Books are Here
            </h1>
            <div className='grid gap-12 my-12 lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
                {

                    books.map(book => <Link to={`/book/${book._id}`}> <Card href="#" key={book._id} className="max-w-sm">
                        <img src={book.imageUrl} alt="" className='h-96' />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {book.bookTitle}
                        </h5>
                        {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p> */}
                    </Card>
                    </Link>
                    )
                }
            </div>
        </div>
    )
}
export default Shop
