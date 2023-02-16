import Table from '../components/Table';

function TablePage() {
  const data = [
    { label: 'Orange', color: 'bg-orange-500', score: 5 },
    { label: 'Apple', color: 'bg-red-500', score: 3 },
    { label: 'Yellow', color: 'bg-yellow-500', score: 1 },
    { label: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
