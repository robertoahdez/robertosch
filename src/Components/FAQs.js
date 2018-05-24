import React, {Component} from 'react';
import {Container, Button, Input, Table} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';
import MenusInfo from './MenusInfo'
import Ftable from './Ftable'

class FAQs extends Component{
  render(){
    return(
      <div>
        <header>
          <MenusInfo/>
          <br/><br/><br/>
          <t1> Etheriøus </t1>
        </header>

        <Container style = {{textAlign: 'center'}}>
          <br/><br/>

          <br/><br/><br/>
          <Ftable/>
          <br/><br/><br/>
        </Container>
      </div>
    )
  }
}

export default withRouter(FAQs);
