import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'
import rapidapi from '../rapidapi.jpg'
import rgomez from '../rgomez.jpg'
import turnitin from '../turnitin.jpg'
import youtube from '../youtube.jpg'
import howdy from '../howdy.jpg'
import docs from '../docs.jpg'
import {withRouter, Link} from 'react-router-dom'

class GridDivide extends Component{

  render(){
    return(
      <Grid columns = {4} divided>
        <Grid.Row>
          <Grid.Column>
            <img src = {rapidapi} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {turnitin} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {docs} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {rapidapi} className = "logo"/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <img src = {rgomez} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {docs} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {howdy} className = "logo"/>
          </Grid.Column>
          <Grid.Column>
            <img src = {youtube} className = "logo"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default withRouter(GridDivide);
