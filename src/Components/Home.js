import React, {Component} from 'react';
import {Container, Button, Input, Segment} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';
import MenusInfo from './MenusInfo'
import GridDivide from './GridDivide'

class Home extends Component{
  state = {
    search: '',
  }

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
          <Input placeholder = 'Search'
            onChange = {(event, data) => this.setState({search: data.value})}
            action={
              <Link to={'https://www.google.com/search?q=' + this.state.search}>
                <Button>
                  Search
                </Button>
              </Link>
            }
          />
          <br/><br/><br/>
          <GridDivide/>
        </Container>
      </div>
    )
  }
}

export default withRouter(Home);
