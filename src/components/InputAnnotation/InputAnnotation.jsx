import PropTypes from "prop-types";
import styles from "./InputAnnotation.module.css";

const InputAnnotation = ({ text }) => (
  <div className={styles.inputAnnotation}>
    <p>{text}</p>
  </div>
);

InputAnnotation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InputAnnotation;
