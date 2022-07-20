import React from "react";
class Card extends React.Component {
  render() {
    var name = this.props.id;

    return (
      <div class="card custom-card">
        <div class="card-header">{name}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{"This is the " + name + " page"}</p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Card;
