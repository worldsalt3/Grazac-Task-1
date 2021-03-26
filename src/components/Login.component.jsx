import React, {useEffect, useState} from 'react'
import axios from 'axios'

const baseUrl = 'https://api.bondeyglobal.com'

const Data = () => {

    const [token, setToken] = useState('');
    const [dataPlan, setdataPlan] 

    const getToken = () => {
        const user = new FormData()
        user.append('email', 'sandbox@grazac.com.ng')
        user.append('password', 'tobiloba123')

        axios({
          method: 'post',
          url: `${baseUrl}/user/login`,
          data: user,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response) => {
            const res = JSON.stringify(response.data.token)
            setToken(res)
          })
          .catch((error) => {
            console.log(error)
          })
    }

    const getDataPlan = () => {
        const token = new FormData()
        token.append('Authorization', `${token}`)

        axios({
          method: 'post',
          url: `${baseUrl}/user/login`,
          data: token,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response) => {
            const res = JSON.stringify(response.data.token)
            setToken(res)
          })
          .catch((error) => {
            console.log(error)
          })
    }
    useEffect(() => {
        getToken()

    }, [])


    return(
        <div>
            <div>
               {token}
            </div>
        </div>
    )
}

export default Data