import React, {Component} from 'react';
import {Container, Input} from 'semantic-ui-react';
//import {withRouter, Link} from 'react-router-dom'
import base from './../utils/firebase';

class Comp2 extends Component {
  state = {
    value: '',
    newValue: '',
  }

  writeData = () => {
    base.database().ref('/').set({
      comp1: this.state.newValue
    });
  }

  componentDidMount() {
    let t = this
    var fire = base.database().ref('/').on('value', function(snapshot) {
      t.setState({value: snapshot.val().comp1})
      //console.log(snapshot.val().comp1)
    });
  }

  render() {
    return (
      <Container className = 'fancy' style = {{textAlign: 'center', color: 'red'}}>
        <div> {this.state.value}</div>
        <div>
          <Input
            placeholder = 'New Date...'
            onChange = {(event, data) => this.setState({newValue: data.value})}
          />
        </div>
        <div>
          <Button onClick = {this.writeData}>
            Change
          </Button>
        </div>
    )
  }

}
