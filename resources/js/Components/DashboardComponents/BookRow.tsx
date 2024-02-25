import { Book } from '@/types'
import React from 'react'

interface BookRowProps {
    id: number;
    title: string;
    thumbnail: string;
    author: string;
    genre: string;
    page_count: number;
    isbn: string;
    status: string;
}

const BookRow: React.FC<BookRowProps> = ({ id, title, thumbnail, author, genre, page_count, isbn, status }) => {
    return (
        <div
            key={id}
            className="p-6 grid grid-cols-8 items-center text-center justify-between border-b border-gray-200"
        >
            <div className="flex justify-center">
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-20 w-20 object-cover rounded-lg"
                />
            </div>
            <div>
                <h2 className="font-semibold text-gray-800">{title}</h2>
            </div>
            <div>
                <h2 className="text-gray-800">{author}</h2>
            </div>
            <div>
                <h2 className="text-gray-800">{genre}</h2>
            </div>
            <div>
                <h2 className="text-gray-800">{page_count}</h2>
            </div>
            <div>
                <h2 className="text-gray-800">{isbn}</h2>
            </div>
            <div>
                <h2 className="text-gray-800">{status}</h2>
            </div>
            <div>
                <button className="bg-blue-600 rounded-lg py-2 text-white px-4">
                    Edit
                </button>
            </div>
        </div>
    )
}

export default BookRow