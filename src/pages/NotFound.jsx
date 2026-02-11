import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div><h1>
        i'm afraid you're lost
        </h1>
        
        <button className='btn btn-dark' onClick={()=>navigate('/',{replace:true})}>Go Home</button>
        
        </div>
  )
}

export default NotFound