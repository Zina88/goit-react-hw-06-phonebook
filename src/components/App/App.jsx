import ContactList from '../ContactList';
import Filter from '../Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import Header from 'components/Header';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <Header />
      </div>

      <Filter />
      {contacts.length > 0 ? <ContactList /> : <p className={css.isEmpty}>Contact list is empty</p>}
    </div>
  );
}
