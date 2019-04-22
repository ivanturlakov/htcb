import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem, editItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModal from './ItemModal';
import ViewItemModal from './ViewItemModal';
import ItemModalEdit from './ItemModalEdit';


class FeelingsList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getItems();
    }
    onDeleteClick = id => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item; 
        return (
            <Container>
                <ItemModal />
                <Row>
                    {items.filter(item => item.category !== 'FAQ').map(({ _id, name, category, content, img, date }) => (
                        <Col className="col-md-4 mb-4" key={_id}>
                            <Card>
                                {this.props.isAuthenticated ? (
                                    <Button
                                        color="danger"
                                        className="btn-sm delete-item"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        Delete
                                    </Button>
                                ) : null}
                                <CardImg top width="100%" src={img} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{name}</CardTitle>
                                    <ViewItemModal content={content} name={name} img={img} />
                                </CardBody>
                                
                                {this.props.isAuthenticated ? (
                                    <ItemModalEdit 
                                        id={_id} 
                                        name={name} 
                                        category={category} 
                                        content={content} 
                                        img={img} 
                                        date={date} 
                                    />
                                ) : null}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>        
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem, editItem }
)(FeelingsList);