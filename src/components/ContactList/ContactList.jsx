import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice'; // Імпорти з Redux
import { selectNameFilter } from '../../redux/filtersSlice'; // Імпорт селектора для фільтра
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectNameFilter); 
  const dispatch = useDispatch();

  // Фільтруємо контакти за значенням фільтра
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // Видаляємо контакт через Redux
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} onDelete={() => handleDelete(id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

