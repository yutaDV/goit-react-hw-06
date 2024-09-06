import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; // Імпорт екшену
import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)); // Видаляємо контакт через Redux
  };

  return (
    <div className={css.contact}>
      <p>{name}: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
