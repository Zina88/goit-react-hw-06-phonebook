import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'redux/contactSlice';
import Contact from 'components/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContactList = filtredContacts();

  return (
    <ul className={css.contactList}>
      {filteredContactList.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => deleteSelectedContact(id)}
            contactId={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
