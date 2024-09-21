import PropTypes from 'prop-types';
import styles from './InputText.module.css';

import IconSearch from '../../assets/icons/icon-before.png';
import IconKeyboard from '../../assets/icons/icon-after.png';
import IconShortcut from '../../assets/icons/shortkey.png';

const InputText = ({ 
  value,
  onChange,
  placeholder,
  iconBeforeLeft,
  iconAfterLeft,
  iconAfterRight,
  className,
  style,
  readOnly,
  size,
  alignment,
  state,
  showBorder,
}) => (
  <div className={`${styles.inputText} ${className}`} style={style}>
    <div className={styles.inputTextWrapper}>
      {iconBeforeLeft && (
        <span className={`${styles.inputTextIcon} ${styles.beforeLeft}`}>
          <img src={iconBeforeLeft} alt="Icon Before Left" />
        </span>
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          ${styles.input} 
          ${styles[size] || styles.medium}
          ${styles[alignment] || styles.left}
          ${styles[state] || styles.default}
          ${!showBorder ? styles.borderNone : ''}
        `}
        readOnly={readOnly}
      />
      <div className={styles.rightIcons}>
        {iconAfterRight && (
          <span className={`${styles.inputTextIcon} ${styles.afterRight}`}>
            <img src={iconAfterRight} alt="Icon After Right" />
          </span>
        )}
        {iconAfterLeft && (
          <span className={`${styles.inputTextIcon} ${styles.afterLeft}`}>
            <img src={iconAfterLeft} alt="Icon After Left" />
          </span>
        )}
      </div>
    </div>
  </div>
);

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  iconBeforeLeft: PropTypes.string,
  iconAfterLeft: PropTypes.string,
  iconAfterRight: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  state: PropTypes.oneOf(['default', 'hover', 'focus', 'disabled', 'error']),
  showBorder: PropTypes.bool,
};

InputText.defaultProps = {
  placeholder: 'Input...',
  iconBeforeLeft: IconSearch,
  iconAfterLeft: IconShortcut,
  iconAfterRight: IconKeyboard,
  className: '',
  style: {},
  readOnly: false,
  size: 'medium',
  alignment: 'left',
  state: 'default',
  showBorder: true,
};

export default InputText;