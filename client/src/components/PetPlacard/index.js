import React from "react";
import { Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import Dog1 from "../../assets/images/dog3.png";
import Dog2 from "../../assets/images/dog.jpeg";
import { ALL_PLACARDS_QUERY } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const PetPlacard = () => {
  const { loading, data } = useQuery(ALL_PLACARDS_QUERY);

  const placardCards = data?.placards || [];
  
  return loading ? (
    <h1> Loading </h1>
  ) : (
    <div>
      <Card.Group>
        {placardCards.map((placard) => (
          <Card fluid key={placard._id}>
            <Card.Content>
              <Image
                floated="left"
                verticalalign="top"
                width='500'
                height='200'
                src={placard.placardPet.petPhoto}
                size="small"
                alt="Pet Image"
              />
              
              {placard.placardPet.petStatus ? (
                <button className="right floated ui negative button">
                  {" "}
                  Lost on {placard.placardPet.petDateLf}{" "}
                </button>
              ) : (
                <button className="right floated ui positive button">
                  {" "}
                  Found on {placard.placardPet.petDateLf}{" "}
                </button>
              )}
              <Card.Header> {placard.placardPet.petName} </Card.Header>
              <Card.Meta> {placard.location} </Card.Meta>
              <Card.Description>
                {placard.placardPet.petColor}. {placard.placardPet.petDesc}.
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Link to={`/pet/${placard._id}`}>
                <button className="fluid ui button">
                  View more details and comments
                </button>
              </Link>
            </Card.Content>
          </Card>
        ))}

        <Card fluid>
          <Card.Content>
            <Image floated="left" verticalalign="top" src={Dog2} size="small" />
            <button className="right floated ui positive button">Found</button>
            <Card.Header> Unknown </Card.Header>
            <Card.Meta>Playa del Carmen, México</Card.Meta>
            <Card.Description>
              Black dog, white in the belly with yellow spots.
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Link to="/pet">
              <button className="fluid ui button">
                View more details and comments
              </button>
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default PetPlacard;
