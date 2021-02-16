import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function BudgetInput() {

  const router = useRouter();

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

    axios.post('api/budget', money)
      .then(() => {
        router.push('/budget');
      })
      .catch((err) => console.log(err));
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
      <br/>

      <button type="submit">Submit</button>   
    </form>
  );
}