import React from 'react'
import {
Comment, 
} from 'semantic-ui-react';

const IndividualComment = () => (
  <div>
    <Comment>
      <Comment.Avatar src='https://i.pinimg.com/originals/16/7c/4b/167c4be0744c2f9ba323f75c42597e15.png' />
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