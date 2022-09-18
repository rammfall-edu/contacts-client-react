import React from 'react';
import { useField } from 'formik';

const Select = ({ name, options, label }) => {
  const [{ value, onBlur, onChange }, { error, touched }] = useField(name);

  return (
    <label>
      {label}
      <select value={value} onChange={onChange} onBlur={onBlur} name={name}>
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      {touched && error && <p className="error">{error}</p>}
    </label>
  );
};

export default Select;
