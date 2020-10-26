import React from 'react';
import PropTypes from 'prop-types';

const AddRepositoryForm = ({ onSubmit }) => {
  const [name, setName] = React.useState('facebook/react');

  const handleChange = ({ target: { value } }) => setName(value);
  const handleClick = () => onSubmit(name);

  return (
    <div>
      <input
        type="text"
        placeholder="facebook/react"
        value={name}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

AddRepositoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddRepositoryForm;
