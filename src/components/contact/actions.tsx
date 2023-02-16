import { Stack } from 'react-bootstrap';
import EditButton from './edit-button';
import DeleteButton from './delete-button';

const Actions = () => (
  <Stack direction='horizontal' gap={1}>
    <EditButton />
    <DeleteButton />
  </Stack>
);

export default Actions;
