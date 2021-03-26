import React, {useState} from 'react'
import './form.style.css'


const form = () => {
    return (
      <div className='form'>
        <input type='number' name='userNumber' id='userNumber' placeholder='Enter your Phone Number' className='numberInput'/>
        <select name="" id=""></select>
        <button onClick={() => {}}>Enter</button>
      </div>
    )
}

export default form
