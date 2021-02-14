import React, { useState } from 'react';
import axios from 'axios';
export default function BudgetInput() {

  const [name, setName] = useState('');
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [utils, setUtils] = useState('');
  const [car, setCar] = useState('');
  const [other, setOther] = useState('');

  const saveBudget = (e) => {
    e.preventDefault();
    const money = {
      name: name,
      income: income,
      rent: rent,
      utils: utils,
      car: car,
      other: other
    };
    console.log(money);
    axios.post('api/budget', money);
  };
  return (
    <form onSubmit={saveBudget}>
      <input
        type="text"
        placeholder="Budget Name"
        required
        onChange={({target}) => setName(target.value)}
      />
      <br/>
      <input
        type="number"
        placeholder="Monthly Income"
        required
        onChange={({target}) => setIncome(target.value)}
      />
      <br/>
      <input
        type="number"
        placeholder="Rent/ Morgage"
        onChange={({target}) => setRent(target.value)}
      />     
      <br/>
      <input
        type="number"
        placeholder="Utilities"
        onChange={({target}) => setUtils(target.value)}
      />
      <br/>
      <input
        type="number"
        placeholder="Car Payment"
        onChange={({target}) => setCar(target.value)}
      />
      <br/>
      <input
        type="number"
        placeholder="Other"
        onChange={({target}) => setOther(target.value)}
      />
      <button type="submit">Budget</button>   
    </form>
  );
}