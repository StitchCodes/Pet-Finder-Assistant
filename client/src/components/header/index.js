import React, { Component } from 'react'
import { Button, Menu, Image } from 'semantic-ui-react'
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
      <Menu.Menu position='right'>
      <Link to="/login">
        <Menu.Item>
          <Button primary>Log In</Button>
        </Menu.Item>
      </Link>
    </Menu.Menu>);
    };

    function LogoutBtn(props) {
      return (
        <Menu.Menu position='right'>
        <Link to="/">
          <Menu.Item onClick={handleLogout}>
            <Button primary>Log Out!</Button>
          </Menu.Item>
        </Link>
      </Menu.Menu>
      );
    };

    function UsernameToken(props) {
      const userName = Auth.getUser().data.name;
      const userLastname = Auth.getUser().data.lastname;
      const userNickname = Auth.getUser().data.nickname;

      if (userNickname) {
          return <p>{userNickname}</p>
        }
        else {
          return <p>{userName} {userLastname}</p>
        }
    };

    function LogStatus(props) {

      if (Auth.loggedIn()) {
        return (
        <div>
          <UsernameToken />
          <LogoutBtn />
        </div>
        )
      }
      return <LoginBtn />
    };

    function handleLogout(params) {
      const user = Auth.getUser();

      Auth.logout(user);
    };

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
        {/* LOGIN/LOGOUT BUTTON */}
        <LogStatus />        
      </Menu>
    )
  }
}

export default Header;