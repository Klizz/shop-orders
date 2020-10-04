import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">Order ID: {props.id}</div>
      <div className="card-body">
      <span className="text-muted">Date added: {props.date}</span>
        <h5 className="card-title">Status: {props.status}</h5>
        <p className="card-text">Customer ID: {props.customer}</p>
        <p className="card-text">Shop ID: {props.shop}</p>
        <p className="card-text text-success">Total paid: ${props.total}</p>
        <a href="/" className="btn btn-primary">
          See details
        </a>
      </div>
    </div>
  );
};

export default Card;