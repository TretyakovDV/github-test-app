import React from 'react';
import { observer, inject } from 'mobx-react';
import {
  Paper, IconButton, Typography, Chip,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import StarIcon from '@material-ui/icons/Star';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Details = inject('details', 'repositories')(observer(({ details, repositories }) => {
  const handleClose = () => details.close();
  const repository = repositories.getRepository(details.id);
  const languages = repositories.languages(details.id);

  if (!details.isOpen) return null;

  return (
    <Paper elevation={10} className="details">
      <div>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Typography variant="h2" className="mt-40 mb-20">{repository.title}</Typography>
      <Typography variant="h4" className="mt-40 mb-20">Stats</Typography>
      <Typography variant="h5" className="details__icon-wrapper">
        <StarIcon className="details__icon" />
        Stars:
        {' '}
        {repository.stars}
      </Typography>
      <Typography variant="h5" className="details__icon-wrapper">
        <VisibilityIcon className="details__icon" />
        Watchers:
        {' '}
        {repository.watchers}
      </Typography>
      <Typography variant="h5" className="details__icon-wrapper">
        <AccountTreeIcon className="details__icon" />
        Forks:
        {' '}
        {repository.forks}
      </Typography>
      <Typography variant="h4" className="mt-40 mb-20">Languages</Typography>
      <div className="languages-container">
        {languages.map((lang) => (
          <Chip key={lang.label} label={`${lang.label} - ${Number(lang.percent).toFixed(4)}%`} className="languages__item" />
        ))}
      </div>
    </Paper>
  );
}));

export default Details;
