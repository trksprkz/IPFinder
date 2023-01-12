import React, { Component } from 'react'
import axios from 'axios'

  const api = axios.create({
    baseURL: `https://api.ipbase.com/v2/info?apikey=iH2FnWq11pMKgJcKyjhwzxDs604ikYSdTdoojY8e`
  })

class Api extends Component {
  state = {
    ipAddress: []
  }

  constructor() {
    super()
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({ ipAddress: res.data})
    })
  }

  render() {
    return (
      <div>
      { this.state.ipAddress.map(ip => <h2 key={ipAddress.ip}>{ipAddress.ip}</h2>) }
      </div>
    )
  }
  }
export default Api
