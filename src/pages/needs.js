import React, { Component } from 'react';
import NeedsForm from '../components/NeedsForm';
import { Container } from 'reactstrap';

class Needs extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="display-3 my-5 text-center">Lets Define Your Needs</h1>
        </Container>
        <NeedsForm />
      </div>
    );
  }
}

export default Needs;