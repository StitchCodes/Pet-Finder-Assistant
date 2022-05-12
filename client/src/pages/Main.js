import React from 'react'
import {
  Container,
  Grid,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

import FilterForm from '../components/FilterForm';
import PetPlacard from '../components/PetPlacard';

const Main = ()=> (
  <div>
    <Container style={{ marginTop: '6em' }}>
      <Grid>
      {Auth.loggedIn() ? (<Grid.Row>
           <Grid.Column floated='right' width={5}>
           <Link to="/addpet"><Button floated='right'>Add a Pet</Button></Link>
           </Grid.Column>
        </Grid.Row>) : (<div></div>)}
        

        <Grid.Row>
          <Grid.Column fluid>
        <FilterForm/>
        </Grid.Column>
          </Grid.Row>

        <Grid.Row>
          <Grid.Column  fluid>
              <PetPlacard/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
)

export default Main;