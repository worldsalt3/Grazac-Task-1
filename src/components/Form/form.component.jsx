import React, {useState} from 'react'
import './form.style.css'


const Form = ({dataPlan}) => {

  const [networkDataPlan, setNetworkDataPlan] = useState('plan');
  const [networks, setNetworks] = useState('default')



    const getSelectedNetwork = (e) => {
      setNetworks(e.target.value)
    }

    const getSelectedPlan = (e) => {
      setNetworkDataPlan(e.target.value)
    }
    

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
          <select
            name='dataPlan'
            id='dataPlan'
            value={networkDataPlan}
            onChange={(e) => getSelectedPlan(e)}
          >
            <option disabled value='plan'>
              Select Data Plan
            </option>
            {dataPlan[networks]
              ? dataPlan[networks].map((dataPlans, index) => {
                  // console.log(index)
                  return (
                    <option key={index} value={index}>
                      {dataPlans.data}
                    </option>
                  )
                })
              : null}
          </select>
          <div className='amount'>
            Amount:{dataPlan[networks] && dataPlan[networks][networkDataPlan]
              ? `N${dataPlan[networks][networkDataPlan].amount}`
              : null}
          </div>
          <button onClick={() => {}}>Enter</button>
        </div>
      </div>
    )
}

export default Form
