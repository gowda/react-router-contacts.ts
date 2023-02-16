import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, useSubmit } from 'react-router-dom';
import DeleteConfirmationDialog from './delete-confirmation-dialog';

const DeleteButton = () => {
  const submit = useSubmit();
  const ref = useRef<HTMLFormElement>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);

  useEffect(() => {
    if (confirmed && ref.current) {
      submit(ref.current);
    }
  }, [confirmed, submit]);

  return (
    <>
      <Form
        ref={ref}
        method='post'
        action='destroy'
        onSubmit={(event) => {
          // eslint-disable-next-line no-restricted-globals
          if (!confirmed) {
            setShowDialog(true);
            event.preventDefault();
          }
        }}
      >
        <Button
          type='submit'
          variant='danger'
          className='shadow-none rounded-1'
        >
          Delete
        </Button>
      </Form>
      <DeleteConfirmationDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={() => setConfirmed(true)}
      />
    </>
  );
};

export default DeleteButton;
