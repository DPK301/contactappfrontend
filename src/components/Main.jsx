import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Accordion from 'react-bootstrap/Accordion';

import { Link } from 'react-router-dom';
function Main() {
    const base_url='http://localhost:8000'

    const[admindata,setAdmindata]=useState([])
    const fetchData=async()=>{
      const result = await axios.get(`${base_url}/get-all-details`)
      console.log(result);
      setAdmindata(result.data.detail)
     }


    console.log(admindata);
    const deleteContact=async(id)=>{
      const result = await axios.delete(`${base_url}/delete-an-contact/${id}`)
      console.log(result);
      alert(result.data.message)
      fetchData()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div> 
      
      <div style={{backgroundImage:"url('https://www.dashly.io/blog/wp-content/uploads/2020/07/Dashly-2.jpg')",backgroundSize:'cover',height:'500px'}} className='text-center p-5 '>
            <h1 style={{fontSize:'90px',color:'white' ,marginTop:'130px',backgroundColor:' rgba(203, 147, 255, 0.32)',textShadow:'3px 3px 3px black'}}>
               LET'S STAY CONNECTED
            </h1>
        
        </div> 
        <div className='text-center m-3'>
          <p style={{opacity:'75%',margin:'0'}}><i>Welcome to the contact page</i></p>
          <p style={{opacity:'75%'}}><i>"If you really care about someone you will make time for them."</i></p>
        </div>

      <Accordion className='m-3 border-0 shadow' >
      <Accordion.Item eventKey="0">
        <Accordion.Header> <b>contacts :</b>  <i style={{color:'blue'}} class="fa-solid fa-address-book"></i> </Accordion.Header>
        <Accordion.Body>
           <div>
           {admindata.map(a=>( <Link to={`/view/${a.id}`}>
      <div className='container shadow mb-3 card p-3'>
           <div className="row text-center">
           
            <div className="col ps-5 text-start">
              <div className='d-flex'>
                 <Avatar  style={{backgroundColor:'lightblue',marginTop:'10px'}}> {a.username.charAt(0)}</Avatar>
                 
                <div style={{color:'black'}} className='mt-1'>
                <span className='m-3'><b>{a.username}</b>
                 </span> <br />
                <span className='m-3'> {a.name.firstname} {a.name.lastname}</span>
                </div>
                 
                 </div>
            </div>
            <div className="col pt-3"><span style={{color:'green'}} ><b>{a.phone}</b></span></div>
            <div className="col pt-3"><a href=""><b>{a.email}</b></a></div>
            <div style={{opacity:'50%',color:'black'}} className="col text-start d-flex ps-5"> <i class="fa-solid fa-location-dot mt-1"></i>  
            <div className='ms-1'>
            {a.address.city},{a.address.street},{a.address.zipcode}
            </div>
            </div>
            <div className="col text-end pt-3 pe-5"><Link onClick={()=>deleteContact(a.id)}><i className='fa-solid fa-trash '></i></Link></div>
           </div>
      </div>
     </Link>))}
           </div>
           <div style={{position:'sticky',bottom:'0'}} className='text-end'>
     <Link to={'/add'}>
     <Fab className='m-3' color="primary" aria-label="add">
      <AddIcon />
     </Fab>
     </Link>
      </div>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    
      
    

      
      </div>
  )
}

export default Main