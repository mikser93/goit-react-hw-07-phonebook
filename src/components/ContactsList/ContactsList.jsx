import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import s from './ContactsList.module.css';

export function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items.contacts);
  const filter = useSelector(state => state.filter);
  const currentContacts = contacts.filter(item => item.name.toLowerCase().includes(filter));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactsList}>
      {currentContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <div className={s.contact}>
            <p>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
