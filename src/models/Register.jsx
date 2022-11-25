import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Register() {
    return(
       <>
         <Row>
           <Navbar bg="primary" variant="dark">
             <Container>
               <Navbar.Brand href="/"><h4>InstaYa Envios</h4></Navbar.Brand>
                 <Nav className="ms-auto">
                 <div className="bg-light vr" />
                 <Nav.Link href="/"><h5>Regresar</h5></Nav.Link>
               </Nav>               
             </Container>           
           </Navbar>
         </Row>
         <br></br><br></br><br></br>
         <Container>
           <Row className="justify-content-md-center">
             <Col className="bg-primary opacity-75 gx-5 rounded rounded-xxl" lg="6">
               <Form>
                  <br></br><br></br><br></br>
                  <Form.Text className="text-center text-white">
                    <h1>REGISTER</h1> 
                  </Form.Text>
                  <br></br><br></br><br></br>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>Usuario</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" size="lg" placeholder="Ingrese su Usuario" required />
                    </Col>
                  </Form.Group><br></br>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className="text-white" column sm="3"><h5>E-mail</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="email" size="lg" placeholder="Ingrese su E-mail" required />
                    </Col>
                  </Form.Group><br></br>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-white" column sm="3"><h5>Password</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="password" size="lg" placeholder="Ingrese su Password" required />
                    </Col>
                  </Form.Group><br></br>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-white" column sm="3"><h5>Password 2</h5></Form.Label>
                    <Col sm="9">
                      <Form.Control type="password2" size="lg" placeholder="Confirme su Password" required />
                    </Col>
                  </Form.Group><br></br><br></br>
                  <Button className="col-md-4 content-center" size="lg" variant="dark opacity-90" type="submit">
                   Confirmar
                  </Button><br></br><br></br>
               </Form>  <br></br>  
             </Col>
           </Row>
         </Container>
       </>
    );
     
}