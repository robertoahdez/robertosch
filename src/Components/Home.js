import React, {Component} from 'react';
import {Container, Button} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';
import spaceship from '../spaceship';

class Home extends Component{
  render(){
    return(
      <Container>
        <img src = {spaceship} className = "logo" alt "logo"/>
      <Container>
    )
  }
}

export default withRouter(Home);
