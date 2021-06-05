import './styles/App.css';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <details>
      <summary className="text-large">Aditum pagamentos</summary>
      <div className="App">
        <main >
          <div className="text-left">
            <h6>Método de pagamentos aditum</h6>
          </div>
          <div className="">
            <Form>
              <Form.Group>
                <Form.Control size="sm" as="select">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
                <Form.Control size="sm" as="select">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
                <Form.Control size="sm" as="select">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>ID do antiffraude</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
          </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
        </Button>
            </Form>
          </div>
        </main>
      </div>
    </details>
  );
}

export default App;
