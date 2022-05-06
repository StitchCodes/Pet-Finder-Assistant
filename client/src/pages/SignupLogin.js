import React from "react";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const SignupLogin = () => (
  <Segment>
    <Grid columns={2} relaxed="very">
      <GridColumn>
        <Grid
          textAllign="center"
          style={{ height: "100vh" }}
          verticalAllign="middle"
        >
          <GridColumn style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAllign="center">
              <Image src="logo.png" /> Log-in to your Account
            </Header>

            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  placeholder="Password"
                  type="password"
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
);

export default SignupLogin;
