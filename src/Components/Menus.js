import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom';

class Menus extends Component{
  render(){
    return(
      <div>
        <header>
          //<img src = {logo} className = "logo" alt = "logo"/>
          <h1 className = "App-title">
            Welcomen!
          </h1>
        <header>
      </div>
    )
  }
}

export default withRouter(Menus);
