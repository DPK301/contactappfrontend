import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
function View()
 {
  const base_url='http://localhost:8000'
  const {id}= useParams();
  console.log(id);
  const [contact,setContact]=useState({})

   
  const getcontact = async(id)=>{
    const result = await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result);
    setContact(result.data.detail)

  }

  console.log(contact);
  
  useEffect(()=>{getcontact(id)},[])
  return (
    <div>
          <div  className='card shadow p-3 container mt-5 mb-5'>
             <div >
             <div className='row'>
              <div className="col-1 pt-3 ">
              <Avatar  style={{backgroundColor:'lightblue',width:'90px',height:'90px'}}> {contact.username?.charAt(0)}</Avatar>
              </div>
              <div className="col-9 ps-5"> <h1 style={{fontSize:'50px'}}>{contact.name?.firstname} {contact.name?.lastname}</h1>
               <p style={{opacity:'50%',fontSize:'30px'}}>@ {contact.username}</p>
              </div>
              <div className="col-2 text-end pe-5 pt-3">
               <Link to={`/edit/${contact.id}`}> <i className='fa-solid fa-pen'></i></Link>
              </div>
             </div>
             <hr />
              <div className='m-5' style={{fontSize:'30px'}}>
              <i class="fa-solid fa-envelope"></i> : 
                {contact.email} <br />
                <i class="fa-solid fa-phone"></i> :{contact.phone} <br />
                <i class="fa-solid fa-location-dot"></i> : {contact.address?.city}, {contact.address?.street} 
                <span style={{opacity:'50%'}}> {contact.address?.zipcode}</span>
              </div>
             
             
             </div>
          </div>
    </div>
  )
}

export default View