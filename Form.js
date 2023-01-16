import React from 'react'
import { useState } from 'react';




const Form = ({onSubmitForm}) => {

    const [formData, setFormData] = useState({name:'',color:'red', point:0})
    
    
    function fomOnclick (e) {
        e.preventDefault();
        onSubmitForm(formData)
        setFormData({name:'', color:'red', point:0})
    }
    
    const handleChange = (e) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    }
    
  return (
    <form onSubmit={fomOnclick}>
        <label>Player name</label>
        <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange}
        />
        
        <label>Player team</label>
        <select
            name="color" 
            value={formData.color} 
            onChange={handleChange}>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
      <input type="submit" value='Add player'/>    
    </form>
  )
}

export default Form