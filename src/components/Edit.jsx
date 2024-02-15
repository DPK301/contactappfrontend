import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import {
  MDBInputGroup
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function Edit() {
  const base_url='http://localhost:8000'
  const[cid,setId]=useState('');
  const[cusername,setusername]=useState('');
  const[cfirstname,setFname]=useState('');
  const[clastname,setLname]=useState('');
  const[cemail,setEmail]=useState('');
  const[cphone,setphone]=useState('')
  const[ccity,setcity]=useState('');
  const[cstreet,setstreet]=useState('')
  const[czipcode,setzipcode]=useState('')
  const {id}=useParams()
  console.log(id);

  const getcontact = async(id)=>{
    const result = await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.detail);
   setId(result.data.detail.id)
   setusername(result.data.detail.username)
   setFname(result.data.detail.name.firstname)
   setLname(result.data.detail.name.lastname)
   setEmail(result.data.detail.email)
   setphone(result.data.detail.phone)
   setcity(result.data.detail.address.city)
   setstreet(result.data.detail.address.street)
   setzipcode(result.data.detail.address.zipcode)

  }

 useEffect(()=>{getcontact(id)},[])

 const location = useNavigate()

 const updateContact=async(e)=>{
  e.preventDefault()
  const body = {
    city:ccity,
    street:cstreet,
    zipcode:czipcode,
    firstname:cfirstname,
    lastname:clastname,
    id:cid,
    email:cemail,
    username:cusername,
    phone:cphone
  }
    const result = await axios.post(`${base_url}/update-an-contact/${id}`,body)
    console.log(result);
    alert(result.data.message)
    location('/')
}

  return (
    <div>
      <div>
        <h3 className='mt-5 ms-5 mb-5'>Edit Details :</h3>

        <div className='container'>
        <MDBInput readOnly onChange={e=>setId(e.target.value)} value={cid} className='mb-3' label='Id' id='typeText'  />
        <i class="fa-solid fa-user"></i> :
        <MDBInputGroup  noWrap textBefore='@'>
      <input onChange={e=>setusername(e.target.value)}  value={cusername}  className='form-control mb-3' type='text' placeholder='Username' />
    </MDBInputGroup>
        <div className='row'>
          <div className="col"> <MDBInput  onChange={e=>setFname(e.target.value)}  value={cfirstname} className='mb-3' label='First Name' id='typeText' type='text' /></div>
          <div className="col">  <MDBInput onClick={e=>setLname(e.target.value)}  value={clastname} className='mb-3' label='Last Name' id='typeText' type='text' /></div>
          
        </div>
      
        <i class="fa-solid fa-envelope"></i> :
        <MDBInput onChange={e=>setEmail(e.target.value)}  value={cemail}  className='mb-3' label='Email' id='typeText' type='Email' />
        <i class="fa-solid fa-phone"></i> :
        <MDBInput onChange={e=>setphone(e.target.value)}  value={cphone}  className='mb-3' label='Phone Number' id='typeText' />
        <i class="fa-solid fa-location-dot"></i> :
        <div className='row'>
          <div className="col"> <MDBInput onChange={e=>setcity(e.target.value)}  value={ccity}  className='mb-3' label='City' id='typeText' type='text' /> </div>
          <div className="col"> <MDBInput onChange={e=>setstreet(e.target.value)}  value={cstreet}  className='mb-3' label='Street' id='typeText' type='text' /> </div>
          <div className="col"> <MDBInput  onChange={e=>setzipcode(e.target.value)}  value={czipcode} className='mb-3' label='Zipcode' id='typeText'  /> </div>
        </div>
       

        <Button onClick={e=>updateContact(e)} className='mb-3' variant="success">save</Button>
        </div>

      </div>

      
    </div>
  )
}

export default Edit