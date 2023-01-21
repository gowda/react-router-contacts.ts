import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface Props {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteConfirmationDialog = ({ open, onConfirm, onClose }: Props) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby='alert-dialog-title'
    aria-describedby='alert-dialog-description'
  >
    <DialogTitle id='alert-dialog-title'>Delete contact?</DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-description'>
        Please confirm you want to delete this record.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onConfirm} color='error'>
        Delete
      </Button>
      <Button onClick={onClose} autoFocus>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteConfirmationDialog;
