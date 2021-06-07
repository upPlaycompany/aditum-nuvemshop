import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap';


function Boleto() {
    return (
        <div>
            <Form>
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Boleto bancário" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Place Older
                </Button>
            </Form>
        </div>
    );
}
export default Boleto;