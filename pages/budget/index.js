import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Chart from '../../components/Chart.jsx';

export default function Budget(props) {
  console.log("person", props)
  return (
    <div>
      <div>
        <Link href="/">
          <button>Home</button>
        </Link>      
        <Link href="/stocks">
        <button>Stocks</button>
        </Link>
      </div>
      <hr/>
      <h1>this will the budget page</h1>
      <div>

      {props.data.map(budget => <Chart key={budget._id} data={budget}/>)}
      </div>
    </div>
  );
}

Budget.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/budget')
  const data = await res.json()
  const dataArr = { data: data.map(person => person)}
  return dataArr
}