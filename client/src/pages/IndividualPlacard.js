import React from 'react'
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';

const IndividualPlacard = () => (
  <div>
    <Container style={{ marginTop: '6em' }}>
      <Grid>

        <Grid.Row>
           <Grid.Column floated='right' width={5}>
           </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column floated='right' width={16}>
          <Card fluid>
              <Card.Content>
              <Grid.Column floated='left' width={3}>
                <Image floated='left' verticalAlign='top' src={'https://preview.redd.it/dlz88eao41821.jpg?auto=webp&s=cc9ae1dd3133464cc1825ad9753b48d57daec59a'} size='medium' rounded />
              </Grid.Column>
           
              <Grid.Column floated='left' width={12}>
                <Card.Header> 
                    <Header size='huge'> Appa  
                    <Header.Subheader> Puerto Morelos, México </Header.Subheader> 
                    </Header> 
                </Card.Header>
                
                <Card.Description>
                    <Segment padded vertical>
                    <strong> Species: </strong> Chow Chow
                    </Segment>
                    <Segment padded vertical>
                    <strong> Gender: </strong>  Male
                    </Segment>
                    <Segment padded vertical>
                    <strong> Description: </strong>  White dog. Very friendly, if seen please keep him away from the street, he's scared of cars.
                    </Segment>
                    <Segment padded vertical>
                    <strong> Date I was last seen: </strong>  12/04/2022
                    </Segment>
                    <Segment padded vertical>
                    <strong> Reward: </strong>  10,000 mxn
                    </Segment>
                </Card.Description>


               </Grid.Column>

                <Grid.Column floated='right' width={1}>
                    <button class="right floated ui negative button"> Lost </button>
                </Grid.Column>
              </Card.Content>


              <Card.Content>
                    <Header as='h3'> Area where I was last seen:
                    </Header> 
              </Card.Content>

              <Card.Content>
                    <Link to="/helpout"><button class="fluid ui button">Contact Owner</button></Link>
              </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
             <Grid.Column floated='left' width={16}>
                <CommentSection/>
           </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
)

export default IndividualPlacard;