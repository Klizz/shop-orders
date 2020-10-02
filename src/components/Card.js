import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">Order ID: {props.id}</div>
      <div className="card-body">
      <span className="text-muted">{props.date}</span>
        <h5 className="card-title">Status: {props.status}</h5>
        <p className="card-text">Customer: {props.customer}</p>
        <p className="card-text">Shop: {props.shop}</p>
        <p className="card-text text-success">Total: ${props.total}</p>
        <a href="/" className="btn btn-primary">
          See details
        </a>
      </div>
    </div>
  );
};

export default Card;