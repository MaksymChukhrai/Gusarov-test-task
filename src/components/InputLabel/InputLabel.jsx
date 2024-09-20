import PropTypes from 'prop-types';
import styles from './InputLabel.module.css';
import IconInfo from '../../assets/icons/info-icon.png';

const InputLabel = ({ 
  label,
  showInfoIcon,
  className
}) => (
  <div className={`${styles.inputLabel} ${className}`}>
    <label className={styles.inputLabelText}>{label}</label>
    {showInfoIcon && (
      <span className={styles.inputLabelIcon}>
        <img src={IconInfo} alt="Info Icon" />
      </span>
    )}
  </div>
);

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  showInfoIcon: PropTypes.bool,
  className: PropTypes.string,
};

InputLabel.defaultProps = {
  showInfoIcon: true,
  className: '',
};

export default InputLabel;