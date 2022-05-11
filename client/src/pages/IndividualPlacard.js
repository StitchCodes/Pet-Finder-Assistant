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
// import { useParams } from 'react-router-dom';

const IndividualPlacard = () => {
  // Use `useParams()` to retrieve value of the route parameter `:placardId`
  // const { placardId } = useParams(); 
  const placardTag = "627480c86b16ba96bf70a6a0"
  const { loading, data } = useQuery(SINGLE_PLACARD_QUERY, {
    variables: {placardId: placardTag},
  });
  console.log({data});
  // 
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
                    <Header size='huge'> {/*{data.placardPet.petName}*/}
                    <Header.Subheader> {/*{data?.location}*/} </Header.Subheader> 
                    </Header> 
                </Card.Header>
                
                <Card.Description>
                    <Segment padded vertical>
                    <strong> Species: </strong> {/*{data?.placardPet.petSpecies}*/}
                    </Segment>
                    <Segment padded vertical>
                    <strong> Gender: </strong>  {/*{data?.placardPet.petGender}*/}
                    </Segment>
                    <Segment padded vertical>
                    <strong> Description: </strong>  {/*{data?.placardPet.petColor}*/}. {/*{data?.placardPet.petDesc}*/}
                    </Segment>
                    <Segment padded vertical>
                    <strong> Date I was last seen: </strong>  {/*{data?.placardPet.petDateLF}*/}
                    </Segment>
                    <Segment padded vertical>
                    <strong> Reward: </strong>  10,000 mxn
                    </Segment>
                </Card.Description>


               </Grid.Column>

                <Grid.Column floated='right' width={1}>
                    <button className="right floated ui negative button"> {/*{data?.placardPet.petStatus}*/} </button>
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
</>);

  }

export default IndividualPlacard;