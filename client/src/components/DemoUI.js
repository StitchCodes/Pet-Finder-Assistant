import { Button } from "semantic-ui-react";

import React, { Component } from "react";
import { Button } from "semantic-ui-react";
export class DemoUI extends Component {
  render() {
    return (
      <div>
        <div class="ui blue inverted three item menu">
          <a class="item">Semantic UI Button</a>
        </div>
        <Button>Click Here</Button>
        <div>
          <br />
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </div>
      </div>
    );
  }
}

export default DemoUI;
