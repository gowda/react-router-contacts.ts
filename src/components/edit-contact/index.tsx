import { Form } from 'react-router-dom';
import { Contact } from '../../contact';
import Actions from './actions';
import LabelledTextField from './labelled-text-field';
import LabelledTextFieldArray from './labelled-text-field-array';
import LabelledTextarea from './labelled-textarea';

type Props = Contact;

const EditContact = ({ first, last, twitter, avatar, notes }: Props) => (
  <Form method='post' id='contact-form'>
    <LabelledTextFieldArray
      label='Name'
      fields={[
        { name: 'first', placeholder: 'First', defaultValue: first },
        { name: 'last', placeholder: 'Last', defaultValue: last },
      ]}
    />
    <LabelledTextField
      label='Twitter'
      name='twitter'
      placeholder='@jack'
      defaultValue={twitter}
    />
    <LabelledTextField
      label='Avatar URL'
      name='avatar'
      placeholder='https://example.com/avatar.jpg'
      defaultValue={avatar}
    />
    <LabelledTextarea label='Notes' name='notes' defaultValue={notes} />
    <Actions />
  </Form>
);

export default EditContact;
