import PropTypes from 'prop-types';
import styles from './InputGroup.module.css';

const InputGroup = ({ children, style }) => (
  <div className={styles.inputGroup} style={style}>
    {children}
  </div>
);

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

InputGroup.defaultProps = {
  style: {},
};

export default InputGroup;
