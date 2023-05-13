import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, filterInput }) => {
  return (
    <>
      <label className={styles.labelFilter} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        className={styles.inputFilter}
        id="filter"
        name="filter"
        value={filter}
        onChange={filterInput}
        placeholder="Enter contact name"
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterInput: PropTypes.func.isRequired,
};
