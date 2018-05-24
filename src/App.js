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
import Customize from './Components/Customize'
import FAQs from './Components/FAQs'
import ContactUs from './Components/ContactUs'
import MenusInfo from './Components/MenusInfo'
import Menus from './Components/Menus'

class App extends Component {
  state = {
    comp: true
  }

switchState = () => this.setState({comp: !this.state.comp})

  render() {
    console.log(this.props);

    let button = (
      <Button onClick={this.switchState}>
      Switch Component
      </Button>
    )
    return (
      <div className = "Ether">
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/Customize' component = {Customize}/>
          <Route exact path = '/FAQs' component = {FAQs}/>
          <Route exact path = '/ContactUs' component = {ContactUs}/>
          <Route path = '/' component = {PageNotFound}/>
          <Route exact path = '/Comp1' component = {Comp1}/>
          <Route exact path = '/Comp2' component = {Comp2}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
