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

    renderComments(comments) {
        if (comments != null) {
            return (
                <ul key={comments.id} className="list-unstyled">
                    <li className="comment">{comments.comment}</li>
                    <li className="author">{comments.author}</li>
                    <li className="date">{comments.date}</li>
                </ul>
            )
        }
        else {
            return (
                <div></div>
            ); 
        }
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