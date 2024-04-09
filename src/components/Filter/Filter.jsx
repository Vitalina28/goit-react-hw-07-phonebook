import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from '../../redux/selector';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
