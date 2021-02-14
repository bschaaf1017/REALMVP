import Link from 'next/link';
import Chart from '../../components/Chart.jsx';

export default function Budget() {
  return (
    <div>
      <Link href="/">
        <button>Home</button>
      </Link>      
      <h1>this will the budget page</h1>
      <Chart />
    </div>
  );
}
