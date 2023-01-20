import { Grid, Stack } from '@mui/material';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message: string };

  return (
    <Grid
      id='error-page'
      container
      sx={{ height: '100vh' }}
      alignItems='center'
      justifyContent='center'
    >
      <Stack>
        <h1 style={{ textAlign: 'center' }}>Oops!</h1>
        <p style={{ textAlign: 'center' }}>
          Sorry, an unexpected error has occurred.
        </p>
        <p style={{ textAlign: 'center' }}>
          <i>{error.statusText || error.message}</i>
        </p>
      </Stack>
    </Grid>
  );
};

export default ErrorPage;
