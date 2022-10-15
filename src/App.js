import React from 'react'
import { Route,Routes } from 'react-router-dom'
import * as BookAPI from './BooksAPI.js'
import './App.css'
import Shelfs from './Shelfs'
import Search from './Search'
import { useEffect, useState } from 'react'


const BooksApp = () => {
  const [data, setData] = useState(null)
  const [update, setUpdate] = useState('')
  
    async function getAllData() {
         await BookAPI.getAll()
        .then((result) => setData(result)) 
      }
      useEffect(()=>
      { console.log(update)
        getAllData()
        setUpdate()
      }, [update])

      
    
    return (
      <div className="app">
      <Routes>
        <Route path='/' element={<Shelfs data={data} setUpdate={setUpdate} update={update}/>}/>
        <Route path='/search' element={<Search data={data} setUpdate={setUpdate} update={update} />}/>
      </Routes>        
      </div>
    )
  }


export default BooksApp
