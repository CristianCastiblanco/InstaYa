import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import react from '../assets/react'

export default function Login() {
    return(
       <>
         <Navbar bg="primary" variant="dark">
           <Container>
               <Navbar.Brand href="#home">InstaYa Envios</Navbar.Brand>
               <Nav className="ms-auto">
                  <div className="bg-light vr" />
                  <Nav.Link href="#register">Registro</Nav.Link>
               </Nav>               
           </Container>           
       </Navbar>
       <br></br>
       <Container>
          <Row>
            <Col sm={8}>
            <Carousel>
             <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
               />
               <Carousel.Caption>
                 <h3>First slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
               />
               <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
     

                <Carousel.Caption>
                 <h3>Third slide label</h3>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
          </Col>
          <Col sm={4}>
            <Form>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
             </Form.Group>
             <Button variant="primary" type="submit">
               Submit
             </Button>
            </Form>
          </Col>
       </Row>
       </Container>
       </>
    )
     
}

// export default function Formulario() {
//     return(
//        <Container>
//        <Row>
//           <Col sm={8}>sm=8</Col>
//           <Col sm={4}>sm=4</Col>
//        </Row>
//        </Container>
//     )
     
// }

// export default function Navegacion() {
//     return(
//        <Navbar bg="primary" variant="dark">
//            <Container>
//                <Navbar.Brand href="#home">InstaYa Envios</Navbar.Brand>
//                <Nav className="ms-auto">
//                   <div className="bg-light vr" />
//                   <Nav.Link href="#register">Registro</Nav.Link>
//                </Nav>               
//            </Container>           
//        </Navbar>
      
//     )
     
// }