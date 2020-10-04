import React, {Component} from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";



class App extends Component {
  state = {
    id: 0,
    date: null,
    customer: null,
    status: null,
    shop: 0,
    total: 0,
  };

  /* componentDidMount() {
    request
    .get('http://localhost:5000/getdata')
    .end(function (err, res) {
      console.log(res.req);
    });
  } */

  componentDidMount() {
    fetch(`http://localhost:5000/getdata`)
      .then((results) => results.json())
      .then((json) => {
        this.setState({
          id: json.order.id,
          date: json.order.date_add,
          customer: json.order.id_customer,
          status: json.order.current_state,
          shop: json.order.id_shop,
          total: json.order.total_paid,
        });
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>My orders</h1>
          <Card
            id={this.state.id}
            date={this.state.date}
            status={this.state.status}
            customer={this.state.customer}
            shop={this.state.shop}
            total={this.state.total}
          />
        </div>
      </div>
    );
  }
}

export default App;
