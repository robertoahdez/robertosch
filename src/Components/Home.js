import React, {Component} from 'react';
import {Container, Button} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';
import spaceship from '../spaceship.gif';
import MenusInfo from './MenusInfo'


class Home extends Component{



  render(){
    return(
      <Container style = {{textAlign: 'center',}}>
        <br/>
        <img src = {spaceship} className = "logo"/>
        <GridDivide/>
      </Container>
    )
  }
}

export default withRouter(Home);
