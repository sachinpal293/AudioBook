import React, { useState } from 'react'

import { Select, Label, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "History",
        "Programming",
        "Science Fiction",
        "Western",
        "Fantacy",
        "Horror",
        "Biblography",
        "Autography",
        "Self-help",
        "Memorial",
        "Business",
        "Children Book",
        "travel",
        "Religion",
        "Art and Design "
    ]

    const [SelectbookCategory, setSelectBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectValue = (event) => {
        // console.log(event.target.value);
        setSelectBookCategory(event.target.value)
    }
    const handleBookSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageUrl = form.imageUrl.value;
        const category = form.category.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;

        const bookObj = {
            bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
        }

        console.log(bookObj);

        // send data to databse

        // fetch("http://localhost:5000/upload-book", {
        //     method: "POST",
        //     headers: {
        //         "Conetnt-Type": "application/json",
        //     },
        //     body: JSON.stringify(bookObj)
        // }).then(res => res.json()).then(data => {
        //     console.log(data);
        //     alert("Book Uploaded SuccessFully")
        //     form.reset();
        // })

        const response = await fetch('http://localhost:5000/upload-book', {
            method: 'POST',
            body: JSON.stringify(bookObj),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if (result) {
            alert("Book Uploaded SuccessFully")
            form.reset();
        }
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book </h2>
            <form onSubmit={handleBookSubmit} className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
                {/* first row */}
                <div className="flex gap-8">
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book Name" required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" name='authorName' placeholder="Author Name" required />
                    </div>
                </div>
                {/* second row */}
                <div className="flex gap-8">
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageUrl" value="Book Image Url" />
                        </div>
                        <TextInput id="imageUrl" type="text" name='imageUrl' placeholder="Book Image Url" required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Book Category" />
                        </div>
                        <Select id="category" name="category" className='w-full rounded' value={SelectbookCategory} onChange={handleChangeSelectValue}>
                            {
                                bookCategories.map((opt) => <option key={opt} value={opt}>{opt}</option>)
                            }
                        </Select>
                    </div>
                </div>
                {/* third row */}

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' placeholder="write your book Book Discription..." required rows={5} className='w-full' />
                </div>

                {/* forth row */}
                <div className="flex gap-8">
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
                        </div>
                        <TextInput id="bookPdfUrl" type="text" name='bookPdfUrl' placeholder="Book PDF URL" required />
                    </div>
                </div>
                <button type='submit' className='mt-5 font-semibold bg-blue-300 py-2 rounded'>Upload Book</button>
            </form>
        </div>
    )
}

export default UploadBook
