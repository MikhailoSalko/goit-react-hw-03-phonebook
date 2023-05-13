import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onClick={() => onClick(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = {
  contacts: [],
};
