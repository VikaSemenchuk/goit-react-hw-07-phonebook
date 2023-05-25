import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleChange({ currentTarget: { name, value } }) {
    if (name === 'name') setName(value);
    if (name === 'number') setPhone(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isExistContact = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isExistContact) {
      toast.warning(`Contact ${name} is already exists!`);
      return;
    }

    dispatch(addContact({ name: name.trim(), phone, id: nanoid() }));
    toast.success(`Contact ${name} successful existed!`);

    reset();
  }

  function reset() {
    setName('');
    setPhone('');
  }
  const nameId = nanoid();
  const numberId = nanoid();
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,2}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
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
