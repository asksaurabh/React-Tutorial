import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  const { carName, carCost } = useSelector((state) => {
    return {
      carName: state.form.carName,
      carCost: state.form.carCost,
    };
  });

  const handleCarNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch(changeCost(value));
  };

  const handleCarSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ carName, carCost }));
    dispatch(changeName(''));
    dispatch(changeCost(0));
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleCarSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              className='input is-expanded'
              value={carName}
              onChange={handleCarNameChange}
            />
          </div>
        </div>

        <div className='field-group'>
          <div className='field'>
            <label className='label'>Cost</label>
            <input
              className='input is-expanded'
              value={carCost || ''}
              onChange={handleCostChange}
              type='number'
            />
          </div>
        </div>

        <div className='field'>
          <button button is-link>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
