import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  const carName = useSelector((state) => {
    return state.form.carName;
  });

  const handleCarNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form>
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
      </form>
    </div>
  );
}

export default CarForm;
