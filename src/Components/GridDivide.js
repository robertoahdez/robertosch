import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'
import spaceship from '../spaceship.gif'
import {withRouter} from 'react-router-dom'

class GridDivide extends Component{

  render(){
    return(
      <Grid columns = {3} divided>
        <Grid.Row>
          <Grid.Column>
            <img src = {spaceship} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {spaceship} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {spaceship} className = "logo"/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <img src = {spaceship} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {spaceship} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {spaceship} className = "logo"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default withRouter(GridDivide);
