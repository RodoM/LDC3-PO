import Table from './components/table/Table';
import './App.css';

function App() {
  const netIncomes = [
    {brand: 'McDonalds', income: 1291283},
    {brand: 'Burger King', income: 1927361},
    {brand: 'KFC', income: 1098463}
  ];

  const averageIncome = () => {
    const totalIncomes = netIncomes.reduce((total, brand) => total + brand.income, 0);
    return totalIncomes / netIncomes.length;
  };

  return (
    <>
      <Table data={netIncomes}/>
      <p>Promedio: {averageIncome()}</p>
    </>
  )
}

export default App
