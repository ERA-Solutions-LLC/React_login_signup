import { React, useState} from 'react'

import { Card, Form, FormGroup, Label, Input } from 'reactstrap'

const Signup = () => {
  return (
    <div>
      <Card>
      <Form>
      <FormGroup>
        <Label for='fName'>First Name</Label>
        <Input id='fName' name='fName' placeholder='Please enter first name.' type='text' />
      </FormGroup>
      <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
      </Form>
      </Card>
    </div>
  )
}

export default Signup
