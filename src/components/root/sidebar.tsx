import { Stack } from '@mui/material';

import ContactsNav from './contacts-nav';
import NewButton from './new-button';
import SearchField from './search-field';

const Sidebar = () => (
  <div id='sidebar' style={{ width: '100%', height: '100%' }}>
    <h1>React Router Contacts</h1>
    <Stack direction='row' justifyContent='space-between'>
      <SearchField />
      <NewButton />
    </Stack>
    <ContactsNav />
  </div>
);

export default Sidebar;
