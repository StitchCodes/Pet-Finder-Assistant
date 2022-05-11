import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, NEWUSER } from '../utils/mutations';
import { Button, Form, Grid, GridColumn, Header, Segment, Container} from "semantic-ui-react";

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [newFormState,setNewFormState] = useState({email:'', name:'', lastname:'', password: '', phone: ''});
  const [ login ] = useMutation(LOGIN);
  const [ newUser] = useMutation(NEWUSER);


  // Update form state on Input for Login
  const handleChange = (event) => {
    const {name, value} = event.target;
  
    setFormState({ ...formState, [name]: value});
  };

  // Submit Form function for Login
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const {data} = await login({variables: { ...formState}});

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  // Update form state on Input for sing up
  const signUpHandleChange = (event) => {
    const {name, value} = event.target;
  
    setNewFormState({ ...newFormState, [name]: value});
  };

   // Submit Form function for sign up
   const signupHandleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const {data} = await newUser({variables: { ...newFormState}});
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <Container  style={{ marginTop: '8em' , "marginBottom": '3rem' }}>
      <Segment>
        <Grid columns={2} relaxed="very">
          <GridColumn   verticalallign="middle">
            <Grid
              textallign="center"
              style={{ height: "75vh" }}
            >
              {/* LOGIN TO YOUR ACCOUNT */}
              <GridColumn style={{ maxWidth: 450 }}   verticalallign="middle">
                <Header as="h2" color="teal" textallign="center">
                  Log-in to your Account
                </Header>
    
                <Form size="large" onSubmit={handleFormSubmit}>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                      name="email"
                      onChange={handleChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <Button color="teal" fluid size="large">
                      Log In
                    </Button>
                  </Segment>
                </Form>
              </GridColumn>
            </Grid>
          </GridColumn>
          <GridColumn>
            <Grid
              textallign="center"
              style={{ height: "75vh" }}
            >
              {/* CREATE ACCOUNT */}
              <GridColumn style={{ maxWidth: 450 }}   verticalallign="middle">
                <Header as="h2" color="teal" textallign="center">
                 Create your Account
                </Header>
    
                <Form size="large" onSubmit={signupHandleFormSubmit}>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="address book"
                      iconPosition="left"
                      name="name"
                      placeholder="First Name"
                      onChange={signUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="address book outline"
                      iconPosition="left"
                      name="lastname"
                      placeholder="Last Name"
                      onChange={signUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="user"
                      name="email"
                      iconPosition="left"
                      placeholder="E-mail address"
                      onChange={signUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      name="password"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      onChange={signUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="phone"
                      name="phone"
                      iconPosition="left"
                      placeholder="phone #"
                      onChange={signUpHandleChange}
                    />
                    <Button color="teal" fluid size="large">
                      Sign In
                    </Button>
                  </Segment>
                </Form>
              </GridColumn>
            </Grid>
          </GridColumn>
        </Grid>
      </Segment>
      </Container>)
};

export default Login; 