import React from 'react';
import { observer, inject } from 'mobx-react';
import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
} from '@material-ui/core';

import AddRepositoryForm from '../components/AddRepositoryForm';
import RepositoryTableRow from '../components/RepositoryTableRow';
import Notification from '../components/Notification';
import Details from '../components/Details';

const App = inject('repositories', 'details')(observer(({ repositories, details }) => {
  const { list } = repositories;
  const handleSubmit = (name) => repositories.addRepository(name);
  const handleDelete = (id) => repositories.removeRepository(id);
  const handleDetails = (id) => details.open(id);

  return (
    <>
      <Notification />
      <Details />
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h1" className="mb-20 mt-40">
            Github Stargazer
          </Typography>
        </Grid>
        <Grid item>
          <AddRepositoryForm onSubmit={handleSubmit} />
        </Grid>
        <Grid item>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={250}>Name</TableCell>
                <TableCell width={100} align="right">Stars</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>

            {list.length ? (
              <TableBody>
                {list.map((el) => (
                  <RepositoryTableRow
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    url={el.url}
                    stars={el.stars}
                    onDelete={handleDelete}
                    onDetails={handleDetails}
                  />
                ))}
              </TableBody>
            ) : (
              <TableFooter>
                <TableRow>
                  <TableCell align="center" variant="footer" colSpan={5}>
                    <Typography variant="h4">List is empty</Typography>
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </Grid>
      </Grid>
    </>
  );
}));

export default App;
