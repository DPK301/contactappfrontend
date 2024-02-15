import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import {
  MDBInputGroup
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Add() {
  const location = useNavigate()

  const[id,setId]=useState('');
  const[username,setusername]=useState('');
  const[firstname,setFname]=useState('');
  const[lastname,setLname]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setphone]=useState('')
  const[city,setcity]=useState('');
  const[street,setstreet]=useState('')
  const[zipcode,setzipcode]=useState('')

  console.log(lastname);
  const base_url='http://localhost:8000/add-contact'

  const addContact = async(e)=>{
    e.preventDefault()
    console.log(city,street,zipcode,firstname,lastname,id,email,username,phone);

    const body ={city,street,zipcode,firstname,lastname,id,email,username,phone}

    const result = await axios.post(base_url,body).then((result)=>{console.log(result);
    alert(result.data.message)
    location('/')
  })
  .catch((error)=>{alert('please enter a unique employee id')})
    console.log(result);
  }



  return (
    <div> 
      <div>
        <h3 className='mt-5 ms-5 mb-5'>Enter Details :</h3>

        <div className='container'>
        <MDBInput onChange={e=>setId(e.target.value)} className='mb-3' label='Id' id='typeText'  />
        <i class="fa-solid fa-user"></i> :
        <MDBInputGroup  noWrap textBefore='@'>
      <input onChange={e=>setusername(e.target.value)}  className='form-control mb-3' type='text' placeholder='Username' />
    </MDBInputGroup>
        <div className='row'>
          <div className="col"> <MDBInput  onChange={e=>setFname(e.target.value)} className='mb-3' label='First Name' id='typeText' type='text' /></div>
          <div className="col">  <MDBInput onClick={e=>setLname(e.target.value)} className='mb-3' label='Last Name' /></div>
          
        </div>
      
        <i class="fa-solid fa-envelope"></i> :
        <MDBInput onChange={e=>setEmail(e.target.value)}  className='mb-3' label='Email' id='typeText' type='Email' />
        <i class="fa-solid fa-phone"></i> :
        <MDBInput onChange={e=>setphone(e.target.value)}  className='mb-3' label='Phone Number' id='typeText'  />
        <i class="fa-solid fa-location-dot"></i> :
        <div className='row'>
          <div className="col"> <MDBInput onChange={e=>setcity(e.target.value)}  className='mb-3' label='City' id='typeText' type='text' /> </div>
          <div className="col"> <MDBInput onChange={e=>setstreet(e.target.value)}  className='mb-3' label='Street' id='typeText' type='text' /> </div>
          <div className="col"> <MDBInput  onChange={e=>setzipcode(e.target.value)} className='mb-3' label='Zipcode' id='typeText'  /> </div>
        </div>
       

        <Button onClick={e=>addContact(e)} className='mb-3' variant="success">ADD</Button>
        </div>

      </div>

      

    </div>
  )
}

export default Add