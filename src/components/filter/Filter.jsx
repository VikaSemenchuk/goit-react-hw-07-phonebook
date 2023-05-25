import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/contactsSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  function onChangeFilter({ target: { value } }) {
    dispatch(changeFilter(value));
  }

  return (
    <div className={css.filter}>
      <h5 className={css.filterTitle}>Find contacts by name</h5>
      <input
        type="text"
        name="filter"
        className="form-control"
        placeholder="Contact name"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
