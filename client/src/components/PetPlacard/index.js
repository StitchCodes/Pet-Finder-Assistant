import React from 'react'
import {
  Image,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PetPlacard = () => (
    <div>
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
                <Link to="/pet"><button class="fluid ui button">View more details and comments</button></Link>
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
                <Link to="/helpout"><button class="fluid ui button">View more details and comments</button></Link>
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
                <Link to="/helpout"><button class="fluid ui button">View more details and comments</button></Link>
              </Card.Content>
          </Card>
      </Card.Group> 
    </div>
)

export default PetPlacard;