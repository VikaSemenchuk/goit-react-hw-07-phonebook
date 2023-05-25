import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContact } from 'redux/contacts/operations';
import css from './ContactItems.module.css';

export const ContactItems = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  let formattedPhone = phone
    .toString()
    .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

  function onDeleteContact(contactId) {
    dispatch(deleteContact(contactId));
    toast.success(`Contact ${name} successful deleted!`);
  }
  return (
    <>
      <div className={css.list}>
        <span>
          {name}: {formattedPhone}
        </span>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

ContactItems.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
