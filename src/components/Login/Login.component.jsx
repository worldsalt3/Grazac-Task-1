import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Form from '../Form/form.component';

const baseUrl = 'https://api.bondeyglobal.com'

const Data = () => {

    const [dataPlan, setdataPlan] = useState('')

    const getToken =  () => {
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
            const res = response.data.token
            sessionStorage.setItem('token', res)
          })
          .catch((error) => {
            console.log(error)
          })
    }

    const getData =  () => {
        const token = sessionStorage.getItem('token')
        if(token) {
            axios({
              method: 'get',
              url: `${baseUrl}/data/plans`,
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer' ${token}`,
              },
            })
              .then((response) => {
                const res = response.data.data
                setdataPlan(res)
              })
              .catch((error) => {
                console.log(error)
              })
        }
    }

    useEffect(() => {
        getData()
        getToken()
    }, [])


    return(
        <div>
            <div>
               <Form dataPlan={dataPlan}/>
            </div>
        </div>
    )
}

export default Data