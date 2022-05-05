import React from 'react'
import { Segment, Container, Icon } from 'semantic-ui-react'

const Footer = () => {
    return (
        <Segment fixed='bottom' inverted color='teal'>
            <Container textAlign='center'>
            <div>
                Pet Finder Assistant  
                <Icon name='paw' />
            </div>
            </Container>
         </Segment>
    );
};
        
export default Footer;
        
