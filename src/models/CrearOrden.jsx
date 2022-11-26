import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CrearOrden() {
  return(
       <>
         <Row>
           <Navbar bg="primary" variant="dark">
             <Container>
               <Navbar.Brand href="/home"><h4>InstaYa Envios</h4></Navbar.Brand>
                 <Nav className="ms-auto">
                 <div className="bg-light vr" />
                 <Nav.Link href="/Home"><h5>Home</h5></Nav.Link>   
                 <div className="bg-light vr" />
                 <Nav.Link href="/"><h5>Logout</h5></Nav.Link>
               </Nav>               
             </Container>           
           </Navbar>
         </Row>
         <Form> 
           <Row>
              <Col sm={1}></Col>
              <Col sm={5} className="gx-5">
                <Container>
                  <br></br><br></br><br></br>
                  <Col className="bg-primary opacity-75 gx-5 text-center rounded rounded-xxl" lg="12">
                    <Form.Text className="text-white">
                      <h3>Datos Remitente</h3> 
                    </Form.Text>
                  </Col><br></br>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Fecha</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Fecha del envío" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Dirección</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Dirección de Recogida" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Ciudad</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese la Ciudad" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Teléfono</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Teléfono" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Cliente</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Cliente" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Documento</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese No. Documento" required />
                    </Col>
                  </Form.Group><br></br><br></br>
                  <Col className="bg-primary opacity-75 gx-5 text-center rounded rounded-xxl" lg="12">
                    <Form.Text className="text-white">
                      <h3>Datos Destinatario</h3> 
                    </Form.Text>
                  </Col><br></br>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Dirección</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Dirección de Destino" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Ciudad</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese la Ciudad" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Teléfono</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Teléfono" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Nombre</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Nombre Destinatario" required />
                    </Col>
                  </Form.Group>
                </Container>
             </Col>
             <Col sm={2}></Col>
             <Col sm={3} className="gx-5"><br></br><br></br><br></br>
               <Container className="bg-primary opacity-75 gx-5 rounded rounded-xxl">
                  <Form.Text className="text-center text-white">
                    <h3>Dimensiones Mercancia</h3> 
                  </Form.Text><br></br>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Ancho</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Ancho de la Caja" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Largo</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Largo de la Caja" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-white" column sm="3"><h5>Alto</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Alto de la Caja" required />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-white" column sm="3"><h5>Peso</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="sm" placeholder="Ingrese Peso de la Caja" required />
                    </Col>
                  </Form.Group><br></br><br></br>
                  <Button className="col-md-4 content-center" size="lg" variant="dark opacity-90" type="submit">
                   Confirmar
                  </Button><br></br><br></br>
                  </Container>
             </Col> 
             </Row>
               </Form><br></br> 
               
       </>    
  );
     
}