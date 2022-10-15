import React, { useState,useEffect } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BookAPI from './BooksAPI.js'

export default function Search({ data, setUpdate,update}) {
  const[query,setQuery]=useState('')
  const[searchData,setSearchData]=useState([])
  const updateQuery = (query) =>{
    setQuery(()=>(query=query.trim()))
  }

  function getSearch(){
    BookAPI.search(query)
    .then((result)=>{ 
      if (result&&result.length){
        let books = result.map((book)=>{
          let dataBooks = data&&data.find((dataBook)=> dataBook.id===book.id)
          const shelf = dataBooks ? dataBooks.shelf : 'none'
        return {
          id:book.id,
          title:book.title,
          shelf:shelf,
          authors:book.authors,
          imageLinks:{
            thumbnail: book.imageLinks&&book.imageLinks.thumbnail
          }
        }  
        })
        setSearchData(books)
      }        
      })
  }
  useEffect(()=>
      { 
        getSearch()
        }
      ,[query])
  return (
    <div className="search-books">
      <div className="search-books-bar">    
        <Link to='/'><button className="close-search">Close</button></Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"
          onChange={(e)=>updateQuery(e.target.value)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {query!==''?searchData.map((book, index) => (<Book book={book} key={index} data={data} setUpdate={setUpdate}search={1} />)):
        searchData&&<div>Not Found</div>}
        </ol>
      </div>
    </div>        
  )
}


