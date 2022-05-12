import React from 'react'
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Segment,
} from 'semantic-ui-react';


import { useQuery } from '@apollo/client';
import { SINGLE_PLACARD_QUERY } from '../utils/queries';


import CommentSection from '../components/CommentSection';
import MapComponent from '../components/MapComponent';
import EmailModal from '../components/EmailModal';
//import Dog1 from "../assets/images/dog3.png";
import { useParams } from 'react-router-dom';

const IndividualPlacard = () => {
  // Use `useParams()` to retrieve value of the route parameter `:placardId`
  const placardTag = useParams().placardId; 
  const { loading, data } = useQuery(SINGLE_PLACARD_QUERY, {
    variables: {placardId: placardTag},
  });
  const singlePlacard = data?.singlePlacard || {};

return loading ? (
  <h1> Loading </h1>
  ) : (
<>
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
                <Image floated='left' verticalalign='top'  size='medium' rounded />
              </Grid.Column>
           
              <Grid.Column floated='left' width={12}>
                <Card.Header> 
                    <Header size='huge'> {singlePlacard.placardPet.petName}
                    <Header.Subheader> {singlePlacard.location} </Header.Subheader> 
                    </Header> 
                </Card.Header>
                
                <Card.Description>
                    <Segment padded vertical>
                    <strong> Species: </strong> {singlePlacard.placardPet.petSpecies}
                    </Segment>
                    <Segment padded vertical>
                    <strong> Gender: </strong>  {singlePlacard.placardPet.petGender}
                    </Segment>
                    <Segment padded vertical>
                    <strong> Description: </strong> {singlePlacard.placardPet.petColor} color, {singlePlacard.placardPet.petDesc}
                    </Segment>
                    <Segment padded vertical>
                    <strong> Date I was last seen: </strong>  {singlePlacard.placardPet.petDateLF}
                    </Segment>
                    { singlePlacard.placardPet.petReward ? (<Segment padded vertical>
                    <strong> Reward: </strong>  $ {singlePlacard.placardPet.petReward}
                    </Segment>) : (<div> </div>)}
                    
                </Card.Description>
               </Grid.Column>
               {singlePlacard.placardPet.petStatus === true ? (
               <Grid.Column floated='right' width={1}>
                    <button className="right floated ui positive button"> Found </button>
                </Grid.Column>
                ) : (
                <Grid.Column floated='right' width={1}>
                    <button className="right floated ui negative button"> Lost </button>
                </Grid.Column>
                )}
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
</>);

  }

export default IndividualPlacard;