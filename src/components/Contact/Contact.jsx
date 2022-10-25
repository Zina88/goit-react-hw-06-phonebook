import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => (
  <>
    <FaUserAlt className={css.contactLogo} />
    <p>{name}</p>
    <p>{number}</p>
    <FaTrash className={css.delIcon} onClick={onDeleteContact}></FaTrash>
  </>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
