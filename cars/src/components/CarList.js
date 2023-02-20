import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();
  const { cars, carName } = useSelector(
    ({ form, cars: { searchTerm, carsList } }) => {
      const filteredCars = carsList.filter((car) =>
        car.carName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        carName: form.carName,
      };
    }
  );

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold =
      carName && car.carName.toLowerCase().includes(carName.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
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
