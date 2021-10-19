import React from 'react';

const TextField = ({ label, type, name, value, error, onChange }) => {
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '');
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <div className="invalid-feedback">{error}</div>
      ) : (
        <div style={{ color: 'transparent' }}></div>
      )}
    </div>
  );
};

export default TextField;
