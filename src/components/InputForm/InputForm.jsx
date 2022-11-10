import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddContact } from 'redux/operations';
import s from './InputForm.module.css';

export function InputForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.items.contacts);
  const dispatch = useDispatch();

  const inputOperator = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'number') {
      setPhone(event.target.value);
    } else {
      throw new Error('Unexpected value');
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    if (contacts.reduce((acc, item) => [...acc, item.name], []).includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(AddContact({ name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={s.form} onSubmit={formSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputOperator}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={inputOperator}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
