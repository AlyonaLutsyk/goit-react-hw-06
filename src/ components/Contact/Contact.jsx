import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id))
    }

    return (
        <li className={css.item}>
            <p className={css.contact}>
                <span className={css.name}>
                    <FaUser className={css.icon} />
                    {name}
                </span> 
                <span className={css.number}><FaPhoneAlt className={css.icon} />{number}</span>
            </p>
            <button onClick={handleDelete} className={css.button}>
                Delete
            </button>
        </li>
    );
};