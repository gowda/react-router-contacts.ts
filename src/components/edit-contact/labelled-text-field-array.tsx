import { Col, Form, Row } from 'react-bootstrap';

interface Props {
  label: string;
  fields: {
    name: string;
    placeholder?: string;
    defaultValue?: string;
  }[];
}

const LabelledTextFieldArray = ({ label, fields }: Props) => (
  <Row className='mb-2'>
    <Col xs={12} md={2}>
      <span>{label}</span>
    </Col>
    <Col item xs={12} md={10}>
      <Row className='g-2'>
        {fields.map(({ name, placeholder, defaultValue }) => (
          <Col key={name} item xs={12} md={6}>
            <Form.Control
              className='shadow-none rounded-1'
              placeholder={placeholder}
              aria-label='First name'
              type='text'
              name={name}
              defaultValue={defaultValue}
            />
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
);

export default LabelledTextFieldArray;
