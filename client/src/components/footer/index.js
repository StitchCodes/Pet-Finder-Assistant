import React from "react";
import { Segment, Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment fixed="bottom" inverted color="teal">
      <Container textAlign="center">
        <div>Pawtroller: Your Pet Finder Assistant</div>
      </Container>
    </Segment>
  );
};

export default Footer;
