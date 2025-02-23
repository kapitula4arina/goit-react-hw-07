import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

import { BiUser } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const maxLength = 15;
  const formattedNumber = number.replace(/-/g, '');

  return (
    <div className={css.contact}>
      <div className={css.contactGroup}>
        <div className={css.contactItem}>
          <BiUser className={css.icon} size="20" />
          <p className={css.contactDescription}>
            {name.length <= maxLength
              ? name
              : `${name.substring(0, maxLength)}...`}
          </p>
        </div>
        <div className={css.contactItem}>
          <AiOutlinePhone className={css.icon} size="20" />
          <p className={css.contactDescription}>
            <a href={`tel:+38${formattedNumber}`} className={css.phoneLink}>
              +38-{number}
            </a>
          </p>
        </div>
      </div>
      <div className={css.blockBtn}>
        <button
          className={css.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
