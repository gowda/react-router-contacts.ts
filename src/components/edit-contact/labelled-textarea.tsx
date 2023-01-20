import { Grid, TextareaAutosize } from '@mui/material';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
}

const LabelledTextarea = ({
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
      <TextareaAutosize
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        minRows={6}
        maxRows={6}
        style={{ width: '100%' }}
      />
    </Grid>
  </Grid>
);

export default LabelledTextarea;
