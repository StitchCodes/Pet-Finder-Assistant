import React, { Component } from 'react'
import { Button, Menu, Image } from 'semantic-ui-react'

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' inverted color='teal' size='massive'>
        <Menu.Item as='a' header>
          <Image size='mini' src='../../assets/images/logo.png' style={{ marginRight: '1.5em' }} />
          Pet Finder Assistant
        </Menu.Item>
        <Menu.Item
          name='Lost and Found'
          active={activeItem === 'Lost and Found'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Help Out'
          active={activeItem === 'Help Out'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Log In</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;