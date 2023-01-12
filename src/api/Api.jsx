import React from 'react'
import Axios from 'axios'

function Api() {
  const getAddress = () => {
    Axios.get('https://api.ipbase.com/v2/info?ip&apikey=iH2FnWq11pMKgJcKyjhwzxDs604ikYSdTdoojY8e').then((response) => {
      console.log(response)
    })
  }

  return (
    <div><button onClick={getAddress}>IP</button></div>
  )
}

export default Api
