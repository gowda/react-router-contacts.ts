import { Col, Form, Row } from 'react-bootstrap';

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
  <Row className='mb-2'>
    <Col xs={12} md={2}>
      <span>{label}</span>
    </Col>
    <Col item xs={12} md={10}>
      <Form.Control
        className='shadow-none rounded-1'
        as='textarea'
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={6}
        style={{ width: '100%' }}
      />
    </Col>
  </Row>
);

export default LabelledTextarea;
