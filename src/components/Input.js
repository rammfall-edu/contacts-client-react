import React from 'react';
import { useField } from 'formik';

const Input = ({ label, name, type = 'text' }) => {
  const [{ value, onBlur, onChange }, { touched, error }] = useField(name);

  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {touched && error && <p className="error">{error}</p>}
    </label>
  );
};

export default Input;
