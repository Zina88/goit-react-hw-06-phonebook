import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactSlice';
import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={css.filterLabel}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input type="text" className={css.filterText} value={filter} onChange={changeFieldFilter} />
    </label>
  );
}

