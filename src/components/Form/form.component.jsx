import React, {useState} from 'react'
import './form.style.css'


const Form = ({dataPlan}) => {

  const [neworkDataPlan, setNetworkDataPlan] = useState([]);
  const [networks, setNetworks] = useState('default')



    const getSelectedNetwork = (e) => {
      setNetworks(e.target.value)
    }

    console.log(dataPlan[networks])

    return (
      <div className='body'>
        <div className='form'>
          <input
            type='number'
            name='userNumber'
            id='userNumber'
            placeholder='Enter your Phone Number'
            className='numberInput'
          />
          <select
            name='network'
            id='network'
            value={networks}
            onChange={(e) => getSelectedNetwork(e)}
          >
            <option value='default'>Select your Network</option>
            {Object.keys(dataPlan).map((network, index) => {
              return (
                <option key={index} value={network}>
                  {network}
                </option>
              )
            })}
          </select>
          <select name='dataPlan' id='dataPlan' value='plan'>
            <option disabled value='plan'>
              Select Data Plan
            </option>
            {dataPlan[networks] ? dataPlan[networks].map((dataPlans, index) => {
                return (
                  <option key={index} value={index}>
                    {dataPlans.data}
                  </option>
                )
            }) : null}
          </select>
          <div className='amount'>Amount:</div>
          <button onClick={() => {}}>Enter</button>
        </div>
      </div>
    )
}

export default Form
