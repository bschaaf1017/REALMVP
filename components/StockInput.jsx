import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Plot from 'react-plotly.js';
import api from '../ALPHA_API';


export default function StockInput() {
  const [symbol, setSymbol] = useState('');
  const [chartX, setChartX] = useState([]);
  const [chartY, setChartY] = useState([]);

  const searchTicker = (e) => {
    e.preventDefault();
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${api.API_KEY}`)
      .then((resp) => {
        let xArr = [];
        let yArr = [];
        for (let key in resp.data['Time Series (Daily)']) {
          xArr.push(key);
          yArr.push(resp.data['Time Series (Daily)'][key]['4. close']);
        }
        setChartX(xArr);
        setChartY(yArr);
      });
  };
  return (
    <div>

      <form onSubmit={searchTicker}>
        <input 
          type="text"
          placeholder="Ticker Symbol"
          onChange={({target}) => {
            setSymbol(target.value);
            console.log(symbol);
          }}
        />
        <input type="submit" value="Search"/>
      </form>
      <Plot
        data={[
          {
            x: chartX,
            y: chartY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        //   {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 800, height: 800, title: symbol.toUpperCase()}}
      />
    </div>
  );
}