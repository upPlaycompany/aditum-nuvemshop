import './styles/App.css';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
    return (
        <div className="container">
          <Form>
            <div>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <input type="radio" id="male" name="gender" value="male" />Boleto
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form.Group id="address">
                        <Form.Check type="checkbox" label="My billing and shipping address are the same" />
                        <Form.Text>
                          Jackson Garcia <br />
                      Avenida Salvador Allende, 5400, Recreio dos bandeirantes <br />
                      Rio de Janeiro, Rio de Janeiro 22729-714 <br />
                      Brasil<br />
                          <p className="number-blue">21980491917</p>
                        </Form.Text>
                      </Form.Group>
                      <Form.Group as={Row} controlId="CPF">
                        <Form.Label column sm={5}>
                          CPF <strong className="text-color">*</strong>
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control className="cpf-padding" type="text" placeholder="000.000.000.00" />
                          <a href="www.google.com.br"><Form.Check type="checkbox" label="TERMOS E CONDIÇÕES" /></a>
                        </Col>
                      </Form.Group>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <input type="radio" id="male" name="gender" value="male" />Cartão de crédito - até 20x
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form.Group id="address">
                        <Form.Check type="checkbox" label="My billing and shipping address are the same" />
                        <Form.Text>
                          Jackson Garcia <br />
                      Avenida Salvador Allende, 5400, Recreio dos bandeirantes <br />
                      Rio de Janeiro, Rio de Janeiro 22729-714 <br />
                      Brasil<br />
                          <p className="number-blue">21980491917</p>
                        </Form.Text>
                      </Form.Group>
                      <Form.Group as={Row} controlId="Titula-name">
                        <Col sm={4}>
                          <Form.Label className="left" column sm={12}>
                            Nome do titular do cartão <strong className="text-color">*</strong>
                          </Form.Label>
                          <Form.Control type="text" placeholder="Mario Campos silva" />
                        </Col>
                      </Form.Group>
                      <Form.Label> Data de Nascimento</Form.Label>
                      <Form.Group as={Row} controlId="Titula-date">
                        <input type="date" className="date" />
                      </Form.Group>

                      <Form.Group as={Row} controlId="Titula-name-cpf">
                        <Col sm={4}>
                          <Form.Label className="left" column sm={12}>
                            CPF <strong className="text-color">*</strong>
                          </Form.Label>
                          <Form.Control type="text" placeholder="000.000.000.00" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="Titula-name-number-cart">
                        <Col sm={4}>
                          <Form.Label className="left" column sm={12}>
                            Número do cartão <strong className="text-color">*</strong>
                          </Form.Label>
                          <Form.Control type="text" placeholder="0000 00000 00000 0000" />
                        </Col>
                      </Form.Group>
                      <a href="www.google.com.br"><Form.Check type="checkbox" label="TERMOS E CONDIÇÕES" /></a>

                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <Button variant="primary right" type="submit">
              Checkout
                </Button>
          </Form>
        </div>
    );
}
export default Checkout;