import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { Button, Form, Grid, GridColumn, Header, Image, Segment, Container} from "semantic-ui-react";

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      placeholder="Password"
                      type="password"
                      value={formState.password}
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
    
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="address book"
                      inconPosition="left"
                      placeholder="First Name"
                    />
                    <Form.Input
                      fluid
                      icon="address book outline"
                      inconPosition="left"
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