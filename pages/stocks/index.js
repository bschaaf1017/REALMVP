import Link from 'next/link';
import StockInput from '../../components/StockInput.jsx';

export default function Stocks() {
  return (
    <div>
      <div>
        <Link href="/">
          <button>Home</button>
        </Link>
        <Link href="/budget">
          <button>Budgets</button>
        </Link>
        
      </div>
      <hr/>
      <StockInput />
    </div>
  );
}