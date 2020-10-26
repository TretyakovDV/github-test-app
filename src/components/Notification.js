import React from 'react';
import { inject, observer } from 'mobx-react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const Notification = inject('error')(observer(({ error }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    error.deleteError();
  };

  return (
    <Snackbar
      open={error.error}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error?.error?.message}
      </Alert>
    </Snackbar>
  );
}));

export default Notification;
