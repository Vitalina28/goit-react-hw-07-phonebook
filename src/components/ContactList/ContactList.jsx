import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/selector';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className="list">
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
