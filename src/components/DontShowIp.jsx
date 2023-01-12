import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

function DontShowIp() {
  return (
    <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Enter an IP to hide'
        placeholder="IP Address"
      />
    </Form.Group>
    <Button>Submit</Button>
  </Form>
  )
}

export default DontShowIp
