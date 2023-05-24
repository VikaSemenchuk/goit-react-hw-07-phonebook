import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameId = nanoid();
  const numberId = nanoid();

  function handleChange({ currentTarget: { name, value } }) {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  }
 
  
  function handleSubmit(e) {
    e.preventDefault();
    const contactExisting = contacts.some(
      contact =>
      contact.name.toLowerCase().trim() ===
      name.toLowerCase().trim()
      );
      
      if (contactExisting) {
        alert(`Contact ${name} is already exists!`);
        return;
      }
      
      dispatch(addContact({name: name.trim(), number, id: nanoid()}));;
      reset();
    }
    
    function reset() {
      setName('');
      setNumber('');
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor={nameId} className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={numberId} className="form-label">
          Number
        </label>
        <input
          type="tel"
          name="number"
          className="form-control"
          id={numberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Contact
      </button>
    </form>
  );
}