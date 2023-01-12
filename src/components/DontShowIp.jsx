import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { useForm } from "react-hook-form";

export function DontShowIp() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const hiddenIp = (data);

    }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Enter an IP to hide'
        placeholder="IP Address"
        {...register("ipAddress", { required: true })}

      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
  )
}

export default DontShowIp
