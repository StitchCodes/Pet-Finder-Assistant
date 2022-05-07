import React from "react";
import { Segment, Container, Image } from "semantic-ui-react";
import Logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <Segment fixed="bottom" inverted color="teal">
      <Container textAlign="center">
        <Image
          height="30"
          src={Logo}
          style={{ margin: "0", padding: "0px" }}
        ></Image>
        <div>Pawtroller: Your Pet Finder Assistant</div>
      </Container>
    </Segment>
  );
};

export default Footer;
