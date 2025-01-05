// src/components/common/InputField.jsx
import PropTypes from 'prop-types';

function InputField({ name, value, onChange, placeholder })
 {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
export default InputField;

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
 


/*A reusable input field component*/