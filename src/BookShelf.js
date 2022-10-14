import React from 'react'
import Book from './Book'

export default function BookShelf({ title, shelf, data}) {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {shelf.map((book,index)=><Book shelf={shelf} book={book} data={data} key={index}/>)}   
        </ol>
        </div>
    </div>
  )
}
// 