import React from 'react'
import { Route,Routes } from 'react-router-dom'
import * as BookAPI from './BooksAPI.js'
import './App.css'
import Shelfs from './Shelfs'
import Search from './Search'
import { useEffect, useState } from 'react'


const BooksApp = () => {
  const [data, setData] = useState(null)
    async function getAllData() {
        await BookAPI.getAll()
        .then((result) => setData(result)) 
      }
      useEffect(()=>
      { 
        getAllData()
      }, [data])
    
    return (
      <div className="app">
      <Routes>
        <Route path='/' element={<Shelfs data={data} setData={setData}/>}/>
        <Route path='/search' element={<Search data={data} setData={setData}/>}/>
      </Routes>        
      </div>
          
    )
  }


export default BooksApp
