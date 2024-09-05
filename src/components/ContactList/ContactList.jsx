import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice'; // Імпорти з Redux
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts); // Отримуємо контакти через селектор
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // Видаляємо контакт через Redux
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} onDelete={() => handleDelete(id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
