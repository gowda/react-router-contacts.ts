import { Grid, TextField } from '@mui/material';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
}

const LabelledTextField = ({
  label,
  name,
  placeholder,
  defaultValue,
}: Props) => (
  <Grid container marginBottom='1em'>
    <Grid item xs={12} md={2}>
      <span>{label}</span>
    </Grid>
    <Grid item xs={12} md={10}>
      <TextField
        type='text'
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        size='small'
        fullWidth
      />
    </Grid>
  </Grid>
);

export default LabelledTextField;
