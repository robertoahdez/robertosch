import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'

class PageNotFound extends Component {
  state = {
    value: 'hello'
  }

  render() {

    console.log(this.props)

    return (
      <Container className = 'fancy' style = {{textAlign: 'center'}}>
      This is the PageNotFound Page
      

    </Container>
  );
  }
}
  export default withRouter(PageNotFound);
