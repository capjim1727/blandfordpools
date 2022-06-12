/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Card, CardImgOverlay, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Comments, { COMMENTS } from '../components/shared/comments.js';

class Menu extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      selectedDish: null
    } 
    console.log('Menu Component constructor is invoked');
  }

  componentDidMount() {
    console.log('Menu Component componentDidMount is invoked');
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>

      );
    }

    else {
      return (
        <div></div>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        // eslint-disable-next-line react/jsx-key
          <div key={dish.id} className="col-12 col-md-6">
            <Card onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" object src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>    
      );
    });

    console.log('Menu Component render is invoked');

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }  
}

    export default Menu;