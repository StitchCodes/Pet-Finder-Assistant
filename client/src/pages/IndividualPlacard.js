import React from 'react'
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Segment,
} from 'semantic-ui-react';
import CommentSection from '../components/CommentSection';
import MapComponent from '../components/MapComponent';
import EmailModal from '../components/EmailModal';
import Dog1 from "../assets/images/dog3.png";

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
                <Image floated='left' verticalalign='top' src={Dog1} size='medium' rounded />
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
                    <button className="right floated ui negative button"> Lost </button>
                </Grid.Column>
              </Card.Content>


              <Card.Content>
                    <Header as='h3'> Area where I was last seen:
                    </Header> 
                    <MapComponent/>
              </Card.Content>

              <Card.Content>
                <EmailModal/>
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