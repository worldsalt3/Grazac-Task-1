import React, {useState} from 'react'
import './form.style.css'


const form = () => {
    return (
      <div className="body"> 
        <div className='form'>
          <input type='number' name='userNumber' id='userNumber' placeholder='Enter your Phone Number' className='numberInput' value=''/>
          <select name="" id="" >
            <option disabled selected>Select your Network</option>
          </select>
          <button onClick={() => {}}>Enter</button>
        </div>
      </div>
    )
}

export default form
