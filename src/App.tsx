import './styles/App.css';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


import bandeira from './images/Bandeiras/bandeiras-checkout2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <main >
        {/* Details para Aditum pagementos */}
        <details>
          <summary className="title-large">Aditum pagamentos</summary>
          <div>
            <h6 className="text-left small">Método de pagamentos aditum</h6>
          </div>
          <div className="container">
            <Form className="text-right">
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Ativar
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                  <Form.Text>
                    Ativar método de pagamento Aditum.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Ambiente
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>Homologação</option>
                    <option>Produtivo</option>
                  </Form.Control>
                  <Form.Text>
                    Selecione entre homologação para teste de desenvolvimento e produção
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Tipo de antiffraude
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>Konduto</option>
                    <option>CleanSale</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="antiffraude">
                <Form.Label column sm={4}>
                  ID do antiffraude
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" placeholder="FDOSDFOAPSDP" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="CNPJ">
                <Form.Label column sm={4}>
                  CNPJ
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" placeholder="000000000000/000" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="merchantToken">
                <Form.Label column sm={4}>
                  Merchant Token
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" placeholder="dajsn_ajsdnasdapLKNDLASNDFL" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="timeExpire">
                <Form.Label column sm={4}>
                  Tempo de expiração do pedido
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="number" min="0" placeholder="3" />
                  <Form.Text>
                    Depois de quanto o pedido pendente de pagamento deve ser cancelado. Defina em dias.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Status do pedido criado
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>pending</option>
                    <option>analysis</option>
                    <option>ready</option>
                    <option>No</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Definições do endereço - rua
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>line 0</option>
                    <option>line 1</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Definições do endereço - rua
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>line 0</option>
                    <option>line 1</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Definições do endereço - Número
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>line 0</option>
                    <option>line 1</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Definições do endereço - Complemento
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>line 0</option>
                    <option>line 1</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Definições do endereço - Bairro
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>line 0</option>
                    <option>line 1</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </details>

        {/* Details para Aditum Cartão de Crédito */}

        <hr className="line" />
        <details>
          <summary className="title-large">Aditum Cartão de Crédito</summary>
          <h6 className="text-left small">Aditum - pagamentos por cartão de crédito</h6>
          <div className="container">
            <Form className="text-right">
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Ativar cartão de crédito
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>yes</option>
                    <option>no</option>
                  </Form.Control>
                  <Form.Text>
                    Ativar pagamento com cartão de crédito atráves da Aditum.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Máximo de parcelas
                </Form.Label>
                <Col>
                  <Form.Control size="sm" type="number" min="1" max="20" placeholder="1" >
                  </Form.Control>
                  <Form.Text>
                    Selecione o número limite permitido nos cartões de crédito.
                  </Form.Text>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </details>

        {/* Details para Aditum Boleto */}

        <hr className="line" />
        <details>
          <summary className="title-large">Aditum Boleto</summary>
          <div>
            <h6 className="text-left small">
              Aditum - pagamentos por boleto bancário.
            </h6>
          </div>
          <div className="container">
            <Form className="text-right">
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Ativar Boleto
                </Form.Label>
                <Col>
                  <Form.Control size="sm" as="select">
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                  <Form.Text>
                    Ativar pagamentos com boleto bancário através da Aditum.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="validade">
                <Form.Label column sm={4}>
                  Dias para vencimentos do boleto
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="number" min="0" placeholder="0" />
                  <Form.Text>Tempo em dias para o vencimento do boleto a parti da data de gereção</Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="multa">
                <Form.Label column sm={4}>
                  Dias para multa
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="number" min="0" placeholder="0" />
                  <Form.Text>Tempo em dias para a aplicação de multa do boleto a parti da data de gereção</Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="fixo-multa">
                <Form.Label column sm={4}>
                  Valor fixo da multa
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="number" min="0" placeholder="0" />
                  <Form.Text>Tempo em dias para a aplicação de multa do boleto a parti da data de gereção</Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="percentuaMulta">
                <Form.Label column sm={4}>
                  Valor percentual da multa
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" />
                  <Form.Text>
                    Valor percentual sobre o valor original aplicados de multa.
                  </Form.Text>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </details>
        <hr className="line" />

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
                      <Form.Group as={Row} controlId="Titula-name-number-cart-validade">
                        <Col sm={4}>
                          <Form.Label className="left" column sm={12}>
                            Data de Validade <strong className="text-color">*</strong>
                          </Form.Label>
                          <Row className="teste">
                            <Col>
                              <Form.Control type="text" placeholder="MM" />
                            </Col>
                            <Col>
                              <Form.Control type="text" placeholder="AA" />
                            </Col>
                          </Row>
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
      </main>
    </div>
  );
}

export default App;
