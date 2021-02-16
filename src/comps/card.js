import React, { Component } from "react";

class Card extends Component {

  render() {
    return (
      <div className="card col-lg-3">
        <img className="card-im-top rounded-circle" src={this.props.pic} alt="Card image cap" />
        <div className="card-body">
          {/* props -> מאפיין מיוחד של הקומפנינטה שיודע לקרוא
           מאפיינים שמגיעים מהיצירה שלו בקומפננטת אב */}
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.para}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default Card;