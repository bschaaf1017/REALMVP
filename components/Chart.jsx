import React, { useState, useEffect } from 'react';
import AnyChart from 'anychart-react';

const Chart = (props) => {

  let rent = (props.data.rent / props.data.income) * 100;
  let util = (props.data.utils / props.data.income) * 100;
  let car = (props.data.car / props.data.income) * 100;
  let other = (props.data.other / props.data.income) * 100;
  let unspent = ((props.data.income - props.data.rent - props.data.utils - props.data.car - props.data.other) / props.data.income) * 100;
  
  return (
    <div>
      <h1>{props.data.name}'s Budget</h1>
      <h3>Total Monthly Income: ${props.data.income}</h3>
      <AnyChart 
        width={800}
        height={700}
        type="pie"
        data={[
          {x: `Rent/ Morgage: $${props.data.rent}`, value: rent},
          {x: `Utilities: $${props.data.util}`, value: util},
          {x: `Car Payment: $${props.data.car}`, value: car},
          {x: `Other: $${props.data.other}`, value: other},
          {x: `Unspent: $${props.data.income - props.data.rent - props.data.utils - props.data.car - props.data.other}`, value: unspent}
        ]}
      />
    </div>
  );
};

export default Chart;
      

