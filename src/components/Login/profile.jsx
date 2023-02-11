import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

export default function Profile() {
 
  return (
    <>
   
    <div className='profile-bar'>
        <h3 style={{color:"black",fontWeight:500 ,paddingLeft:"1rem"}}>Hello User</h3>
        <p style={{color:'black'}}>To access your Meesho account</p>
        <Link to="/login" >
            <button className='login' style={{color:"white"}}>Login</button>
        </Link>
        
    </div>
    
    </>

  )
}