import React from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddRepositoryForm = ({ onSubmit }) => {
  const [name, setName] = React.useState('');

  const handleChange = ({ target: { value } }) => setName(value);
  const handleClick = () => onSubmit(name);

  return (
    <Paper elevation={10} className="paper mb-20">
      <TextField
        className="paper__input"
        placeholder="facebook/react"
        value={name}
        onChange={handleChange}
      />
      <IconButton
        className="add-button"
        onClick={handleClick}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

AddRepositoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddRepositoryForm;
