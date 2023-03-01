import { React, useState} from 'react'

import { Card, Form, FormGroup, Label, Input } from 'reactstrap'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

  


  return (
    <div>
      <Card>
      <Form>
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

export default Login

