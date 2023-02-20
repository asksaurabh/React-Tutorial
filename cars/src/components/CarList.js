import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { searchTerm, carsList } }) => {
    return carsList.filter((car) =>
      car.carName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className='panel'>
        <p>
          {car.carName} - ${car.carCost}
        </p>
        <button
          className='button is-danger'
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
