import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItems } from 'components/contactItems/ContactItems';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <ContactItems id={id} name={name} phone={phone} />
        </li>
      ))}
    </ul>
  );
};
