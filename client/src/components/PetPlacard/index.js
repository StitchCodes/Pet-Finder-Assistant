import React from 'react'
import {
  Image,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Dog1 from "../../assets/images/dog3.png";
import Dog2 from "../../assets/images/dog.jpeg";
import Cat from "../../assets/images/cat.jpeg";

const PetPlacard = () => (
    <div>
       <Card.Group>
          <Card fluid>
              <Card.Content>
                <Image floated='left' verticalAlign='top' src={Dog1} size='small' />
                <button class="right floated ui negative button"> Lost </button>
                <Card.Header> Appa </Card.Header>
                <Card.Meta> Puerto Morelos, México</Card.Meta>
                <Card.Description>
                  White dog. Very friendly, if seen please keep him away from the street, he's scared of cars.
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Link to="/pet"><button class="fluid ui button">View more details and comments</button></Link>
              </Card.Content>
          </Card>
        
          <Card fluid>
              <Card.Content>
              <Image floated='left' verticalAlign='top' src={Dog2} size='small' />
                <button class="right floated ui positive button">Found</button>
                <Card.Header> Unknown </Card.Header>
                <Card.Meta>Playa del Carmen, México</Card.Meta>
                <Card.Description>
                  Black dog, white in the belly with yellow spots.
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Link to="/helpout"><button class="fluid ui button">View more details and comments</button></Link>
              </Card.Content>
          </Card>

          <Card fluid>
              <Card.Content>
                <Image floated='left' verticalAlign='top' src={Cat} size='small' />
                <button class="right floated ui negative button"> Lost </button>
                <Card.Header> Garfield </Card.Header>
                <Card.Meta> Cancún, México</Card.Meta>
                <Card.Description>
                  Orange cat. Loves lasagna. Hates mondays.
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Link to="/helpout"><button class="fluid ui button">View more details and comments</button></Link>
              </Card.Content>
          </Card>
      </Card.Group> 
    </div>
)

export default PetPlacard;