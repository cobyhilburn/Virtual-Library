import { Book } from '@/types'
import React from 'react'
import BookRow from './BookRow'


const DashboardContent = ({ books }: { books: Book[] }) => {
    return (
        <>
            {books.map((book: Book) => (
                <BookRow
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    thumbnail={book.thumbnail}
                    author={book.author}
                    genre={book.genre}
                    page_count={book.page_count}
                    isbn={book.isbn}
                    status={book.status}
                />
            ))}
        </>
    )
}

export default DashboardContent