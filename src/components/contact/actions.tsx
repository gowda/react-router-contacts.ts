import { Stack } from '@mui/material';
import EditButton from './edit-button';
import DeleteButton from './delete-button';

const Actions = () => (
  <Stack direction='row' spacing={1}>
    <EditButton />
    <DeleteButton />
  </Stack>
);

export default Actions;
