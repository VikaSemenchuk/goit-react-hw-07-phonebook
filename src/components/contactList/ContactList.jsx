import { ContactItems } from 'components/contactItems/ContactItems';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {getFilteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactItems
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};
