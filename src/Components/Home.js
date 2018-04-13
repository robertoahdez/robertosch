import React, {Component} from 'react';
import {Container, Button, Input, Segment} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';
import MenusInfo from './MenusInfo'
import GridDivide from './GridDivide'

class Home extends Component{
  render(){
    return(
      <div>
        <header>
          <MenusInfo/>
          <br/>
          <br/>
          <br/>
          <t1> Etheriøus </t1>
        </header>

        <Container style = {{textAlign: 'center'}}>
            <Input fluid icon = 'Google Search' placeholder = 'Search...'/>
          <br/>
          <GridDivide/>
        </Container>
      </div>
    )
  }
}

export default withRouter(Home);
