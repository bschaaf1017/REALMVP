import React from 'react';
import axios from 'axios';
import AnyChart from 'anychart-react';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get('/api/budget')
      .then(resp => {
        console.log(resp.data[0]);
        this.setState(resp.data[0]);
      });
  }
  render() {
    let rent = (this.state.rent / this.state.income) * 100;
    let util = (this.state.utils / this.state.income) * 100;
    let car = (this.state.car / this.state.income) * 100;
    let other = (this.state.other / this.state.income) * 100;
    let unspent = ((this.state.income - this.state.rent - this.state.utils - this.state.car - this.state.other) / this.state.income) * 100;
    console.log('PERCENT', unspent);
    return (
      <div>

        <h2>{this.state.name}'s Budget</h2>
        <h3>Total Monthly Income: ${this.state.income}</h3>
        <AnyChart 
          width={800}
          height={600}
          type="pie"
          data={[
            {x: `Rent/ Morgage: $${this.state.rent}`, value: rent},
            {x: `Utilities: $${this.state.utils}`, value: util},
            {x: `Car Payment: $${this.state.car}`, value: car},
            {x: `Other: $${this.state.other}`, value: other},
            {x: `Unspent: $${this.state.income - this.state.rent - this.state.utils - this.state.car - this.state.other}`, value: unspent}
          ]}
        />
      </div>
    );
  }
}