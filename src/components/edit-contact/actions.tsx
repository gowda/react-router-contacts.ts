import { Grid, Stack } from '@mui/material';
import CancelButton from './cancel-button';
import SaveButton from './save-button';

const Actions = () => (
  <Grid container>
    <Grid item xs={0} md={2} />
    <Grid item xs={12} md={10}>
      <Stack direction='row' spacing={2}>
        <SaveButton />
        <CancelButton />
      </Stack>
    </Grid>
  </Grid>
);

export default Actions;
