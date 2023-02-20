import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ cars: { searchTerm, carsList } }) => {
    return carsList
      .filter((car) => {
        return car.carName.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((sum, car) => sum + car.carCost, 0);
  });

  return <div className='car-value'>Total Cost: ${totalCost}</div>;
}

export default CarValue;
