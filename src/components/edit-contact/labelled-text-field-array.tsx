import { Grid, TextField } from '@mui/material';

interface Props {
  label: string;
  fields: {
    name: string;
    placeholder?: string;
    defaultValue?: string;
  }[];
}

const LabelledTextFieldArray = ({ label, fields }: Props) => (
  <Grid container marginBottom='1em'>
    <Grid item xs={12} md={2}>
      <span>{label}</span>
    </Grid>
    <Grid item xs={12} md={10}>
      <Grid container columnSpacing={2}>
        {fields.map(({ name, placeholder, defaultValue }) => (
          <Grid key={name} item xs={12} md={6}>
            <TextField
              placeholder={placeholder}
              aria-label='First name'
              type='text'
              name={name}
              defaultValue={defaultValue}
              size='small'
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default LabelledTextFieldArray;
