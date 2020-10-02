import React, {Component} from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";
const axios = require('axios').default;

const endpoint = '/getdata'

class App extends Component {
  state = {
    id: 9,
    date: '25/09/2028',
    customer: 'John Doe',
    status: 'Paid',
    shop: 88712,
    total: 34
  };

  componentDidMount(){
    axios.get(`localhost:5000`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
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
