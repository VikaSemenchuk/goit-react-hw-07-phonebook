import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import Loader from './loader/Loader';
import { ToastContainerEl } from './toast/ToastContainer';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <ToastContainerEl />
      <section className="section">
        <div className="container">
          <h1 className="title">Phonebook</h1>
          <ContactForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Contacts</h2>

          {!error && contacts ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <>
              <p>You still haven't any contacts</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};
