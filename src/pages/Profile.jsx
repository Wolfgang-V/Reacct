import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {changeNameWithSome, changeFirst} from '../redux/appSlice'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const [name, setname] = useState("")
  const params = useParams()
  const {username}= params

  const firstName= useSelector((state)=>state.firstName)
  const friends= useSelector((state)=>state.friends)

  const dispatch = useDispatch()

useEffect(() => {
  axios.get(`https://fakestoreapi.com/${username}`)

})


  
  return (
    <div>
        <h1>this page is for user{firstName}with {username}</h1>
        <h1>{friends.join(', ')}</h1>


        <input type="text"  onChange={(e)=>setname(e.target.value)}/>
         <button onClick={()=>dispatch(changeNameWithSome())} className='btn btn-warning'>Change Name WS</button>

        <button onClick={()=>dispatch(changeFirst())} className='btn btn-warning'>Change Name</button>
    </div>
  )
}

export default Profile