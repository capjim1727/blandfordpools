import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: null
        };
    }

    onDishSelect(comments) {
        this.setState({ comments: comments });
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
        return (
          <div className="col-12 col-md-5 m-1">
              <div className="container">
                  <div className="row">  
                      {this.renderDish()}
                   </div>
              </div>

            </div>
        )
    }
}
export default DishDetail;