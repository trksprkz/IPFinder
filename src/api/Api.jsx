import React, { useState } from 'react'
import Axios from 'axios'
import { Button } from 'semantic-ui-react'
import { DontShowIp } from '../components/DontShowIp'
import { Link } from 'react-router-dom'
import apiKey from './apikey'
import Map from '../components/Map'
function Api() {

  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  }

  const [address, setAddress] = useState("")
  const getAddress = () => {
    Axios.get('https://api.ipbase.com/v2/info?ip&apikey=iH2FnWq11pMKgJcKyjhwzxDs604ikYSdTdoojY8e').then((response) => {
      console.log(response)
      if (DontShowIp  === setAddress) {
        return 'BLOCKED IP'
      }
      const returnMap = () => {
        return <Link to='/map'>Click To See A Map</Link>
        }
      setAddress('Your ip is ' + response.data.data.ip +
      ' Your Latitude is: ' + response.data.data.location.latitude +
      ' Your longitude is ' + response.data.data.location.longitude + {returnMap})
    })
  }


  return (
    <div>
      {visible && (
    <Button primary size='huge' onClick={ () => [getAddress(), removeElement()]}>Get IP</Button>
      )}
      <h2>{address}</h2>
    </div>
  )
}

export default Api
