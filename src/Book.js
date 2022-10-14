import React, { useEffect, useState } from 'react'
import * as BookAPI from './BooksAPI.js'

export default function Book({ data,setData,book }) {
  const[loading,setLoading]=useState(true)
  const[option, setOption]=useState()
  
  
  async function getBookData() {
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

  async function getData(option) {
      BookAPI.update(book, option!=='move'&&option)}
  useEffect(()=>
  { 
    getData(option)
  }, [option]) 
  
  return (
    <div className="book">
      {(loading ? <div>Loading</div>:(
        <div>
          <div className="book-top">
            <div className="book-cover" alt={book.title} style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks&&book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select name={book.id} onChange={(e)=> setOption(e.target.value)} defaultValue={book.shelf}>
            
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