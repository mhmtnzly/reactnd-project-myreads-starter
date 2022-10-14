import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


export default function Shelfs({ data,setData }) {  
    const [loading, setLoading] = useState(true)  
    const titles = ['Currently Reading','Want to Read','Read']
    const [showSearchPage, setshowSearchPage] = useState(false)
    const shelf = {
        currentlyReading:data&&data.filter((res)=> res.shelf==='currentlyReading'),
        wantToRead:data&&data.filter((res)=> res.shelf==='wantToRead'),
        read:data&&data.filter((res)=> res.shelf==='read')
    } 
    useEffect(()=> {
        if (data) {
            setLoading(false)
        }
      },[data])
    


    return (
    <div>
        {loading?(<div>Loading</div>):(
            <>
        {showSearchPage?(''): (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                {titles.map((title,index)=> <BookShelf data={data} key={index} shelf={shelf.currentlyReading&&
    title==='Currently Reading'?shelf.currentlyReading:(
        (title==='Want to Read'?shelf.wantToRead:shelf.read))} title={title}/>)}
                </div>
            </div>
            <div className="open-search">
            <Link to='/search'><button onClick={() => setshowSearchPage(true)}>Add a book</button></Link>
            </div>
        </div>
        )}
        </>
        )}
    </div>
        
  )
}




