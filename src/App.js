import React, { Component } from 'react';
import spaceship from './spaceship.gif';
import './App.css';
import{Container, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import PageNotFound from './Components/PageNotFound'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import Home from './Components/Home'
import MenusInfo from './Components/MenusInfo'

class App extends Component {
  state = {
    comp: true
  }

switchState = () => this.setState({comp: !this.state.comp})

  render() {
    console.log(this.props);

    let button = (
      <Button
        onClick={this.switchState}
      >Switch Component</Button>
    )
    return (
      <Container>
      <header>
        <t1> Hello </t1>
        <MenusInfo/>
      </header>

        <Switch>
          <Route exact path = '/' component = {Home}/>
          //<Route exact path = '/Comp1' component = {Comp1}/>
          <Route exact path = '/Comp2' component = {Comp2}/>

          <Route path = '/' component = {PageNotFound}/>
        </Switch>
      </Container>
    );
  }
}

export default withRouter(App);
