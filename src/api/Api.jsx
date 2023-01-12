import React, { Component } from 'react'
import axios from 'axios'

  const api = axios.create({
    baseURL: `https://api.ipbase.com/v2/info?apikey=iH2FnWq11pMKgJcKyjhwzxDs604ikYSdTdoojY8e`
  })

class Api extends Component {
  state = {
    ip: []
  }

  constructor() {
    super()
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({ ip: res.data})
    })
  }

  render() {
    return (
      <div>
      { this.state.ip.map(ip => <h2 key={ip.ip}>{ip.ip}</h2>) }
      </div>
    )
  }
  }
export default Api
