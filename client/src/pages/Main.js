import React from 'react'
import {
  Container,
  Grid,
  Image,
  Form,
  Card,
  Button,
} from 'semantic-ui-react';

const Main = () => (
  <div>
    <Container style={{ marginTop: '6em' }}>
      <Grid>
        <Grid.Row>
           <Grid.Column floated='right' width={5}>
              <Button floated='right'>Add a Pet</Button>
           </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column floated='left' width={3}>
        
        <Card>
          <Card.Content>
            <Form>
                <label> Filter pets by: </label>
                <Form.Group grouped>
                  <Form.Field label='Lost' control='input' type='checkbox' />
                  <Form.Field label='Found' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group >
                  <Form.Field label='Species' control='select'>
                    <option value='male'>Dog</option>
                    <option value='female'>Cat</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group >
                  <Form.Field label='Color' control='select'>
                    <option value='male'>Black</option>
                    <option value='female'>White</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field label='Gender' control='select'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='female'>Unknown</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group grouped>
                  <label>Date</label>
                  <Form.Field label='This week' control='input' type='checkbox' />
                  <Form.Field label='That month' control='input' type='checkbox' />
                </Form.Group>
                <Form.Field label='Last address seen' control='textarea' rows='3' />
                <Form.Field control='button'>
                    Filter
                </Form.Field>
              </Form>
            </Card.Content>
        </Card>

        </Grid.Column>
        <Grid.Column floated='right' width={13}>
          <Card.Group>
          <Card fluid>
              <Card.Content>
                <Image floated='left' verticalAlign='top' src={'https://preview.redd.it/dlz88eao41821.jpg?auto=webp&s=cc9ae1dd3133464cc1825ad9753b48d57daec59a'} size='small' />
                <button class="right floated ui negative button"> Lost </button>
                <Card.Header> Appa </Card.Header>
                <Card.Meta> Puerto Morelos, México</Card.Meta>
                <Card.Description>
                  White dog. Very friendly, if seen please keep him away from the street, he's scared of cars.
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <button class="fluid ui button">View more details and comments</button>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
              <Image floated='left' verticalAlign='top' src={'https://i0.wp.com/tsl.news/wp-content/uploads/2020/02/Pets-on-Campus-1.jpg?resize=380%2C570&ssl=1'} size='small' />
                <button class="right floated ui positive button">Found</button>
                <Card.Header> Unknown </Card.Header>
                <Card.Meta>Playa del Carmen, México</Card.Meta>
                <Card.Description>
                  Black dog, white in the belly with yellow spots.
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <button class="fluid ui button">View more details and comments</button>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='left' verticalAlign='top' src={'https://images.unsplash.com/photo-1586164383881-d01525b539d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'} size='small' />
                <button class="right floated ui negative button"> Lost </button>
                <Card.Header> Garfield </Card.Header>
                <Card.Meta> Cancún, México</Card.Meta>
                <Card.Description>
                  Orange cat. Loves lasagna. Hates mondays.
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <button class="fluid ui button">View more details and comments</button>
              </Card.Content>
            </Card>
            
          </Card.Group>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default Main;