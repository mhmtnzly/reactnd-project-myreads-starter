import React, { useEffect, useState } from 'react'
import * as BookAPI from './BooksAPI.js'

export default function Book({ book,setUpdate,update,search }) {
  const[loading,setLoading]=useState(true)
  const[option, setOption]=useState()

  function getBookData() {
    if(book.imageLinks!=='' && book.title!=='' &&book.authors!==''){
        setLoading(false)
      }
    else{
        setLoading(false)
      }
    }
  useEffect(()=>
  {
   getBookData()
  }, [book]) 

  function getData(option) {
      BookAPI.update(book, option!=='move'&&option)
      if(search){book['shelf']=option}
    }
  useEffect(()=>
  {
    getData(option)
    setUpdate([book.id,book.option])
  }, [option]) 
  
  return (
    <div className="book">
      {(loading ? <div>Loading</div>:(
        <div>
          <div className="book-top">
            <div className="book-cover" alt={book.title} style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks&&book.imageLinks.thumbnail&&book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select name={book.id} onChange={(e)=> setOption(e.target.value) } value={book.shelf?book.shelf:('none')}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book && book.title}</div>
          {book.authors?
          book.authors.map((author, key)=> <div className="book-authors" key={key}>{author}</div>):
          ('Not Found')}
        </div>   
  ))}
    </div>
  )
}