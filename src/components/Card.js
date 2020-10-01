import React from "react";

const Card = (props) => {
  return (
    <div class="card">
      <div class="card-header">Order ID: {props.id}</div>
      <div class="card-body">
      <span className="text-muted">{props.date}</span>
        <h5 class="card-title">Status: {props.status}</h5>
        <p class="card-text">Customer: {props.customer}</p>
        <p class="card-text">Shop: {props.shop}</p>
        <p class="card-text text-success">Total: {props.total}</p>
        <a href="/" class="btn btn-primary">
          See details
        </a>
      </div>
    </div>
  );
};

export default Card;