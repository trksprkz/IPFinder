import React, { useState } from 'react'
import Axios from 'axios'

function Api() {


  const [address, setAddress] = useState("")
  const getAddress = () => {
    Axios.get('https://api.ipbase.com/v2/info?ip&apikey=iH2FnWq11pMKgJcKyjhwzxDs604ikYSdTdoojY8e').then((response) => {
      console.log(response)
      setAddress('Your ip is ' + response.data.data.ip +
      ' Your Latitude is: ' + response.data.data.location.latitude +
      ' Your longitude is ' + response.data.data.location.longitude)

    })
  }

  return (
    <div><button onClick={getAddress}>IP</button>
      {address}
    </div>
  )
}

export default Api
