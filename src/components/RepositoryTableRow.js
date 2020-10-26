import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';
import SubjectIcon from '@material-ui/icons/Subject';

const RepositoryTableRow = ({
  id,
  title,
  stars,
  url,
  onDetails,
  onDelete,
}) => {
  const handleDetails = () => onDetails(id);
  const handleDelete = () => onDelete(id);

  return (
    <TableRow>
      <TableCell width={250}>{title}</TableCell>
      <TableCell width={100} align="right">{stars}</TableCell>
      <TableCell align="center">
        <IconButton onClick={handleDetails} data-testid="details">
          <SubjectIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton component="a" href={url} target="_blank">
          <LinkIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={handleDelete} data-testid="delete">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

RepositoryTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onDetails: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RepositoryTableRow;
