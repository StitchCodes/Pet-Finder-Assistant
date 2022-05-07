import React from 'react'
import {
  Container,
  Grid,
} from 'semantic-ui-react';

import AddPetForm from '../components/AddPetForm';

const AddPet = () => (
  <div>
    <Container style={{ marginTop: '6em' }}>
      <Grid>

        <Grid.Row>
          <Grid.Column >
            <AddPetForm/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
)

export default AddPet;