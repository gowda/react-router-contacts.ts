import { Button, Modal } from 'react-bootstrap';

interface Props {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteConfirmationDialog = ({ open, onConfirm, onClose }: Props) => (
  <Modal
    show={open}
    onHide={onClose}
    aria-labelledby='alert-dialog-title'
    aria-describedby='alert-dialog-description'
  >
    <Modal.Header className='pb-0 border-bottom-0'>
      <Modal.Title id='alert-dialog-title'>Delete contact?</Modal.Title>
    </Modal.Header>
    <Modal.Body className='py-1'>
      Please confirm you want to delete this record.
    </Modal.Body>
    <Modal.Footer className='border-top-0'>
      <Button
        variant='danger'
        className='shadow-none rounded-1'
        onClick={onConfirm}
      >
        Delete
      </Button>
      <Button
        variant='link'
        className='text-decoration-none'
        onClick={onClose}
        autoFocus
      >
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DeleteConfirmationDialog;
