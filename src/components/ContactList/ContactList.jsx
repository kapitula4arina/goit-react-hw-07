import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import clsx from 'clsx';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={clsx('container', css.containerList)}>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
