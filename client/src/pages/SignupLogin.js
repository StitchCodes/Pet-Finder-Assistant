import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { Button, Form, Grid, GridColumn, Header, Image, Segment, Container} from "semantic-ui-react";

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, {error, data}] = useMutation(LOGIN);

  // Update form state on Input
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormState({ ...formState, [name]: value});
  };

  // Submit Form function
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const {data} = await login({variables: { ...formState}});

      Auth.login(data.login.token);
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
              textallign="center"
              style={{ height: "100vh" }}
              verticalallign="middle"
            >
              {/* LOGIN TO YOUR ACCOUNT */}
              <GridColumn style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textallign="center">
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
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={formState.password}
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
              style={{ height: "100vh" }}
              verticalallign="middle"
            >
              {/* CREATE ACCOUNT */}
              <GridColumn style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textallign="center">
                  <Image src="logo.png" /> Create your Account
                </Header>
    
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="address book"
                      iconPosition="left"
                      placeholder="First Name"
                    />
                    <Form.Input
                      fluid
                      icon="address book outline"
                      iconPosition="left"
                      placeholder="Last Name"
                    />
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />
                    <Form.Input
                      fluid
                      icon="phone"
                      iconPosition="left"
                      placeholder="phone #"
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