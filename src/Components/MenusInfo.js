import React, {Component} from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

const menuName = ['Home', 'Customize', 'FAQs', 'ContactUs']

class MenusInfo extends Component{
  state = {
    pageName: menuName[0]
  }

  handleAClick = (e, {name}) => this.setState({pageName: name})

  link1 = () => {
    this.props.history.push('/');
    this.setState({pageName: 'Home'});
  }
  link2 = () => {
    this.props.history.push('/FAQs');
    this.setState({pageName: 'FAQs'});
  }
  link3 = () => {
    this.props.history.push('/Customize');
    this.setState({pageName: 'Customize'});
  }
  link4 = () => {
    this.props.history.push('/ContactUs');
    this.setState({pageName: 'ContactUs'});
  }

  render(){
    const {pageName} = this.state

    return(
      <Container testAlign = 'right'>
        <Menu style = {{alignItem: 'right'}} fluid widths = {4}>
          <Menu.Item key = {'Home'} name = {'Home'} active = {pageName === 'Home'} color = 'white' onClick = {this.link1}/>
          <Menu.Item key = {'FAQs'} name = {'FAQs'} active = {pageName === 'FAQs'} color = 'white' onClick = {this.link2}/>
          <Menu.Item key = {'Customize'} name = {'Customize'} active = {pageName === 'Customize'} color = 'white' onClick = {this.link3}/>
          <Menu.Item key = {'ContactUs'} name = {'ContactUs'} active = {pageName === 'ContactUs'} color = 'white' onClick = {this.link4}/>
        </Menu>
      </Container>
    )
  }
}

export default withRouter(MenusInfo);
