import React, {Component} from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

const menuName = ['Home', 'Store', 'FAQs', 'Contact Us']

class MenusInfo extends Component{
  state = {
    pageName: menuName[0]
  }

  handleAClick = (e, {name}) => this.setState({pageName: name})

  link1 = () => {
    this.props.history.push('/Home');
    this.setState({pageName: 'Home'});
  }
  link2 = () => {
    this.props.history.push('/Store');
    this.setState({pageName: 'Store'});
  }
  link3 = () => {
    this.props.history.push('/FAQs');
    this.setState({pageName: 'FAQs'});
  }
  link4 = () => {
    this.props.history.push('/Contact Us');
    this.setState({pageName: 'Contact Us'});
  }

  render(){
    const {pageName} = this.state

    return(
      <Container testAlign = 'right'>
        <Menu style = {{alignItem: 'right'}}>
          <Menu.Item key = {'Home'} name = {'Home'} active = {pageName === 'Home'} color = 'white' onClick = {this.link1}/>
          <Menu.Item key = {'Store'} name = {'Store'} active = {pageName === 'Store'} color = 'white' onClick = {this.link2}/>
          <Menu.Item key = {'FAQs'} name = {'FAQs'} active = {pageName === 'FAQs'} color = 'white' onClick = {this.link3}/>
          <Menu.Item key = {'Contact Us'} name = {'Contact Us'} active = {pageName === 'Contact Us'} color = 'white' onClick = {this.link4}/>
        </Menu>
      </Container>
    )
  }
}

export default withRouter(ColoredMenus);
