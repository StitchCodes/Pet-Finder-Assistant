import React from 'react'
import {
Comment, 
} from 'semantic-ui-react';
import Image from "../../assets/images/paw.png";

const IndividualComment = () => (
  <div>
    <Comment>
      <Comment.Avatar src={Image} />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>15/04/2022</div>
        </Comment.Metadata>
        <Comment.Text>I saw a dog that looks similar in the park near Alamo Street!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    
 </div>
)

export default IndividualComment;