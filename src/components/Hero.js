import React from 'react';
import { Container, Jumbotron, ButtonGroup, Badge } from 'reactstrap';
import { MdPanTool, MdFavorite, MdQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="HomeHero">
        <Container>
          <Jumbotron className="text-white">
            <h1 className="display-3">Choose Your Bike</h1>
            <p className="lead">This application will help you decide on the choice of bike.</p>
            <hr className="my-2" />
            <p>if you already have any wishes for your future bike? - click <Badge color="success">Needs</Badge>.</p>
            <p>Maybe you want to choose from all possible options? - click <Badge color="success">Feelings</Badge>.</p>
            <p>Have questions about the choice of components? - welcome to <Badge color="secondary">Faq</Badge>.</p>
            <ButtonGroup size="lg">
              <Link className='btn btn-success' to="/needs"><MdPanTool /> Needs</Link>
              <Link className='btn btn-success' to="/feelings"><MdFavorite /> Feelings</Link>
              <Link className='btn btn-secondary' to="/faq"><MdQuestionAnswer /> Faq</Link>
            </ButtonGroup>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}