import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from '../../redux/selector';
import { addContact } from '../../redux/operations';
// import { nanoid } from '@reduxjs/toolkit';

// const numeId = nanoid();
// const numberId = nanoid();
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const userContact = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (userContact) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className="Form" onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
