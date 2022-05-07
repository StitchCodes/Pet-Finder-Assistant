import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, NEWUSER } from '../utils/mutations';
import { Button, Form, Grid, GridColumn, Header, Image, Segment, Container} from "semantic-ui-react";

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [newFormState,setNewFormState] = useState({email:'', name:'', lastname:'', password: '', nickname: '', phone: ''});
  const [login, {error, data}] = useMutation(LOGIN);
  const [newUser, {error1, data1}] = useMutation(NEWUSER);

  // Update form state on Input for Login
  const handleChange = (event) => {
    const {name, value} = event.target;
    
    setFormState({ ...formState, [name]: value});
    setNewFormState({ ...newFormState, [name]: value});
    console.log(formState);
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
  const sigUpHandleChange = (event) => {
    const {name, value} = event.target;
  
    setNewFormState({ ...newFormState, [name]: value});
    console.log(newFormState);
  };

   // Submit Form function for sign up
   const signupHandleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const {newUserData} = await newUser({variables: { ...newFormState}});
      
      Auth.login(newUserData.newUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <Container>
      <Segment>
        <Grid columns={2} relaxed="very">
          <GridColumn>
            <Grid
              textAllign="center"
              style={{ height: "100vh" }}
              verticalAllign="middle"
            >
              {/* LOGIN TO YOUR ACCOUNT */}
              <GridColumn style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAllign="center">
                  <Image src="logo.png" /> Log-in to your Account
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
                    <Button color="teal" fluid size="lartge ">
                      Log In
                    </Button>
                  </Segment>
                </Form>
              </GridColumn>
            </Grid>
          </GridColumn>
          <GridColumn>
            <Grid
              textAllign="center"
              style={{ height: "100vh" }}
              verticalAllign="middle"
            >
              {/* CREATE ACCOUNT */}
              <GridColumn style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAllign="center">
                  <Image src="logo.png" /> Create your Account
                </Header>
    
                <Form size="large" onSubmit={signupHandleFormSubmit}>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="address book"
                      inconPosition="left"
                      name="name"
                      placeholder="First Name"
                      onChange={sigUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="address book outline"
                      name="lastname"
                      inconPosition="left"
                      placeholder="Last Name"
                      onChange={sigUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="user"
                      name="email"
                      iconPosition="left"
                      placeholder="E-mail address"
                      onChange={sigUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      name="password"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      onChange={sigUpHandleChange}
                    />
                    <Form.Input
                      fluid
                      icon="phone"
                      name="phone"
                      iconPosition="left"
                      placeholder="phone #"
                      onChange={sigUpHandleChange}
                    />
                    <Button color="teal" fluid size="lartge ">
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