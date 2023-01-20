import { Grid } from '@mui/material';
import { Outlet, useNavigation } from 'react-router-dom';
import Sidebar from './sidebar';

const Root = () => {
  const { state } = useNavigation();
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='stretch'
      sx={{ height: '100vh' }}
    >
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid
        id='detail'
        className={state === 'loading' ? 'loading' : ''}
        item
        flexGrow={1}
        sx={{ padding: '2rem 4rem' }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Root;
