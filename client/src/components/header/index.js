import React, { Component } from 'react'
import { Button, Menu, Image, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import Auth from '../../utils/auth';


class Header extends Component {
  
  state = { activeItem: 'home' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
    function LoginBtn(props) {
      return (

      <Link to="/login">
        <Menu.Item>
          <Button primary>Log In</Button>
        </Menu.Item>
      </Link>

     );
    };

    function LogoutBtn(props) {
      return (
        
        <Link to="/">
          <Menu.Item >
            <Button onClick={handleLogout} primary>Log Out!</Button>
          </Menu.Item>
        </Link>
      );
    };

    function UsernameToken(props) {
      const userName = Auth.getUser().data.name;
      const userLastname = Auth.getUser().data.lastname;
      const userNickname = Auth.getUser().data.nickname;

      if (userNickname) {
          return (
            <Label size='big' as='a' basic color='teal'>
            <Icon name='user' />
            Hello {userNickname}
          </Label>)
        }
        else {
          return (
            <Label size='big' as='a' basic color='teal'>
            <Icon name='user' />
            {userName} {userLastname}
          </Label>)
        }
    };

    function LogStatus(props) {

      if (Auth.loggedIn()) {
        return (
        <div>
          <Menu.Menu position='right'>
              <Menu.Item>
                <UsernameToken />
              </Menu.Item>
                <LogoutBtn />
          </Menu.Menu>
      
        </div>
        )
      }
      return (
        <Menu.Menu  position='right'>
        
             <LoginBtn />
       
        </Menu.Menu>)
    };

    function handleLogout(params) {
      const user = Auth.getUser();

      Auth.logout(user);
    };

      return (

      <Menu fixed='top' inverted color='teal' size='massive'>
        <Link to="/">
        <Menu.Item   name='Logo' as='a' header >
          <Image height="30" src={Logo} style={{ marginRight: '1.5em' }} />
          Pawtroller
        </Menu.Item>
        </Link>
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

        {/* LOGIN/LOGOUT BUTTON */}
        <Menu.Menu position='right'>
          <LogStatus />    
        </Menu.Menu>    
      </Menu>
    )
  }
}

export default Header;