import React, {Component} from 'react';
import { Table, Container } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

const colors = [
  'red'
]

class Ftable extends Component{

  render(){
    return(
      <div>
      {colors.map(color => (
        <Table striped color = {color} key = {color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Number</Table.HeaderCell>
              <Table.HeaderCell>Question</Table.HeaderCell>
              <Table.HeaderCell>User</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign='left'>1</Table.Cell>
              <Table.Cell>How can I change the main 8 bookmarks on the home page?</Table.Cell>
              <Table.Cell textAlign='left'>darkwizard</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left'>2</Table.Cell>
              <Table.Cell>Is it possible to change the color from blue to red?</Table.Cell>
              <Table.Cell textAlign='left'>itsmejohnjay</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign='left'>3</Table.Cell>
              <Table.Cell>How can you change the main title of the page?</Table.Cell>
              <Table.Cell textAlign='left'>gamerman123</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        ))}
      </div>
    )
  }
}
export default withRouter(Ftable);
