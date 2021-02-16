import Link from 'next/link';
import BugetInput from '../components/BudgetInput.jsx';
export default function Index() {
  return (
    <div>
      <div>
        <Link href="/budget">
          <button>Budgets</button>
        </Link>
        <Link href="/stocks">
          <button>Stocks</button>
        </Link>
      </div>
      <hr/>
      <BugetInput />
    </div>
  );
}