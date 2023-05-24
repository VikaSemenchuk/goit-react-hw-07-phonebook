import { ContactItems } from 'components/contactItems/ContactItems';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // console.log('contacts :>> ', contacts);
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  // console.log('getFilteredContacts :>> ', filteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItems id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
