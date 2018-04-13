import React, {Component} from 'react';
import {Container, Button, Input, Segment} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';
import MenusInfo from './MenusInfo'

class Customize extends Component{
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
      </div>
    )
  }
}

export default withRouter(Customize);
