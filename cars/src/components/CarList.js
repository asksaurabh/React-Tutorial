import { useSelector } from 'react-redux';

function CarList() {
  const cars = useSelector((state) => {
    return state.cars.carsList;
  });

  const renderedCars = cars.map((car) => {
    return <li key={car.id}>{car.carName}</li>;
  });

  return <div>{renderedCars}</div>;
}

export default CarList;
