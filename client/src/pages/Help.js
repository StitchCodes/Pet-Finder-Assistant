import React from 'react'
import {
  Header,
  Segment,
  Grid,
  Divider,
  Icon,
  Container,
  Button,
} from 'semantic-ui-react';

const Help = () => (
  <div>
    <Container style={{ marginTop: '10em' }}>
      <Header as='h2' icon textAlign='center'>
        <Icon name='handshake outline' circular />
        <Header.Content>Do you want to provide further help but don’t know how? You can donate here!
        </Header.Content>
      </Header>
        
    <Segment placeholder>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical></Divider>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header icon>
              <Icon name='paw' />
              All donations go to a foundation that helps provide temporary homes to found pets until they are reunited with their owner or relocated. 

            </Header>
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name='world' />
              Select amount
            </Header>
            <Button primary>100 mxn </Button>
            <Button primary>200 mxn</Button>
            <Button primary>200 mxn</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Grid.Row style={{ marginTop: '10em' }} >
           <Grid.Column floated='right' width={5}>
              <Button floated='right'>Add a Pet</Button>
           </Grid.Column>
    </Grid.Row>
   </Container>
</div>
)

export default Help;