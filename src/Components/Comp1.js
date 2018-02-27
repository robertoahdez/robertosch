import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';

class Comp1 extends Component {
  state = {
    value: ''
  }

  componentDidMount() {
    let t = this
    var fire = base.database().ref('/').on('value', function(snapshot) {
      t.setState({value: snapshot.val().comp1})
      //console.log(snapshot.val().comp1)
    });
  }

  render() {

    console.log(this.props)

    return (
      <Container className = 'fancy' style = {{textAlign: 'center', }}>
        This is the Comp1 Page<br/>
        <br/>
        <Link to = '/comp2'>
          Go to Comp2
        </Link>
      </Container>
  );
  }
}
  export default withRouter(Comp1);
