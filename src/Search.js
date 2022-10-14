import React, { useState,useEffect } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BookAPI from './BooksAPI.js'

export default function Search({ data, setData }) {
  const[query,setQuery]=useState('')
  const[searchData,setSearchData]=useState('Loading')
  const updateQuery = (query) =>{
    setQuery(()=>(query=query.trim()))
  }      
  useEffect(()=>
      { 
        BookAPI.search(query)
        .then((result)=>{ 
          setSearchData(result)})
        }
      ,[query])
  function shelfBook (searchData){
    if (searchData!=='Loading'&&searchData){
      searchData.forEach((bookSearch)=>
        {
        data.find((bookData)=> {
            if(bookData.id===bookSearch.id){
              bookSearch['shelf']=bookData.shelf
            }
          })
        }
      )
    }
  }
  useEffect(()=>{
    shelfBook(searchData)
    
  },
    [searchData])

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
        {searchData&&searchData.length&&query!==''?searchData.map((book, index) => (<Book data={data} setData={setData} book={book} key={index}/>)):
        searchData&&<div>Not Found</div>}
        
        </ol>
      </div>
    </div>        
  )
}