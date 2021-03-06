import React from 'react'
import {
Comment, 
Form, 
Header,
Container,
} from 'semantic-ui-react';
import IndividualComment from '../IndividualComment';
import Image from "../../assets/images/paw.png";

const CommentSection = () => (
  <div>
    <Container style={{ marginTop: '6em' }}>
        <Comment.Group>
        <Header as='h3' dividing>
          Do you have any information about me? Add a comment:
        </Header>


        <Comment>
          <Comment.Avatar src={Image} />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>22/04/2022</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>My son mentioned seeing a similar dog two streets down. I sent you the address via mail. I'll go out after work to see if we can find him.</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={Image} />
              <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>22/04/2022</div>
                </Comment.Metadata>
                <Comment.Text>Elliot this is so nice, thank you so much! I'm answering your email right now.</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <IndividualComment/>

        <Form reply>
          <Form.TextArea />
            <button className="ui teal button">Reply</button>
        </Form>
      </Comment.Group>
    </Container>
  </div>
)

export default CommentSection;