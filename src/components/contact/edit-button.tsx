import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const EditButton = () => (
  <Form action='edit'>
    <Button type='submit' variant='primary' className='shadow-none rounded-1'>
      Edit
    </Button>
  </Form>
);

export default EditButton;
