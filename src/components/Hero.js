import React from 'react';
import { Container, Jumbotron, ButtonGroup } from 'reactstrap';
import { MdPanTool, MdFavorite, MdQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="HomeHero">
        <Container>
          <Jumbotron className="text-white">
            <h1 className="display-3">Choose Your Way</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
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