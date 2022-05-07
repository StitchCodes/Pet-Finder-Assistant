import React, { Component } from 'react'
import { Button, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' inverted color='teal' size='massive'>
        <Menu.Item as='a' header>
          <Image height="30" src={Logo} style={{ marginRight: '1.5em' }} />
          Pawtroller
        </Menu.Item>
        <Link to="/">
          <Menu.Item
            name='Lost and Found'
            active={activeItem === 'Lost and Found'}
            onClick={this.handleItemClick}
          />
       </Link>
       <Link to="/helpout">
          <Menu.Item
            name='Help Out'
            active={activeItem === 'Help Out'}
            onClick={this.handleItemClick}
          />
        </Link>
        
        <Menu.Menu position='right'>
          <Link to="/login">
            <Menu.Item>
              <Button primary>Log In</Button>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;