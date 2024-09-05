import css from './Contact.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import Person   from '@mui/icons-material/Person';

const Contact = ({name, number, onDelete }) => {
    return (
        <div className={css.contact}>
            <div>
            <p className={css.nameContact}><Person /> {name}</p>
            <p className={css.numberContact}> <PhoneIcon /> {number}</p>
            </div>
            <div className={css.buttonContainer}>
                <button className={css.button} onClick={onDelete}>Delete</button>
            </div>
</div>
    )
}
export default Contact;