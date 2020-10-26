import React from 'react';
import PropTypes from 'prop-types';

const RepositoryListItem = ({ title, stars, url }) => (
  <li>
    <span>{title}</span>
    <span>{stars}</span>
    <a href={url}>Go to repository</a>
  </li>
);

RepositoryListItem.propTypes = {
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default RepositoryListItem;
