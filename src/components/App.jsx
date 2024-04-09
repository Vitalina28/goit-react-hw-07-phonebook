import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ConactForm';
import ContactList from './ContactList/ContactList';

import { selectContacts } from '../redux/selector';
import { fetchContacts } from '../redux/operations';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        width: '600px',
        height: 'auto',
        border: '1px solid black',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '20px',
      }}
    >
      <h1 style={{ textAling: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <b>Your phonebook is empty. Add first contact!</b>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};
