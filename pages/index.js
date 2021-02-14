import Link from 'next/link';
import BugetInput from '../components/BudgetInput.jsx';
export default function Index() {
  return (
    <div>
      <Link href="/budget">
        <button>Budgets</button>
      </Link>
      <BugetInput />
    </div>
  );
}