import React, { useEffect, useState } from 'react'
import list from '../../public/list.json'
import Card from './Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Course() {
  const [book, setBook]=useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try {
       const res= await axios.get("http://localhost:4001/book");
       console.log(res.data)
       setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[]);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                book.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
        <div className="my-3 mt-6 ">
        <Link to="/"><button className="btn cursor-pointer bg-pink-500 hover:bg-pink-700 text-white duration-200 md:duration-300">Go Back</button></Link>
     </div>


    </div>

    </>
  )
}

export default Course