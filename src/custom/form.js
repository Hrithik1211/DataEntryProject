import React, { useState } from 'react'
import { setFirebaseData } from './action'

function Form({modal,setModal}) {
    const [formData, setFormData] = useState({
        name:'',department:'',role:'',position:'',currentProject:''
    })
  return (
    <div className='form'>
        <input placeholder='Name' 
        onChange={(e) => {
            setFormData((val) => ({...val, name:e.target.value}))
        }}
        className='form-input col-md-8 col-sm-10'
        />
        <input placeholder='Department' 
        onChange={(e) => {
            setFormData((val) => ({...val, department:e.target.value}))
        }}
        className='form-input col-md-8 col-sm-10'
        />
        <input placeholder='Role' 
        onChange={(e) => {
            setFormData((val) => ({...val, role:e.target.value}))
        }}
        className='form-input col-md-8 col-sm-10'
        />
        <input placeholder='Job Level' 
        onChange={(e) => {
            setFormData((val) => ({...val, position:e.target.value}))
        }}
        className='form-input col-md-8 col-sm-10'
        />
        <input placeholder='Current Project' 
        onChange={(e) => {
            setFormData((val) => ({...val, currentProject:e.target.value}))
        }}
        className='form-input col-md-8 col-sm-10'
        />
        <button className='form-input-button col-6'
        onClick={() => {
            setFirebaseData(formData)
            setModal(!modal)
        }}
        >
            Submit
        </button>
        
    </div>
  )
}

export default Form