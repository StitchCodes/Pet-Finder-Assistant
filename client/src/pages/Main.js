import React from 'react'
import {
  Container,
  Grid,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import FilterForm from '../components/FilterForm';
import PetPlacard from '../components/PetPlacard';

const Main = () => (
  <div>
    <Container style={{ marginTop: '6em' }}>
      <Grid>

        <Grid.Row>
           <Grid.Column floated='right' width={5}>
           |<Link to="/helpout"><Button floated='right'>Add a Pet</Button></Link>
           </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column floated='left' width={3}>
            <FilterForm/>
          </Grid.Column>

          <Grid.Column floated='right' width={13}>
              <PetPlacard/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
)

export default Main;