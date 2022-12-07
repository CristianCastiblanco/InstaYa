import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Imagen1 from '../assets/imagen1.jpg';
import Imagen5 from '../assets/imagen5.jpg';
import Imagen4 from '../assets/imagen4.jpg';

export default function Login() {
  
  const [values, setValues] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget; alert(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValues(true);alert(setValues);
  };

  return(
       <>
         <Row>
           <Navbar bg="primary" variant="dark">
             <Container>
               <Navbar.Brand href="/"><h4>InstaYa Envios</h4></Navbar.Brand>
               <Nav className="ms-auto">
                  <div className="bg-light vr" />
                  <Nav.Link href="/register"><h5>Register</h5></Nav.Link>
               </Nav>               
             </Container>           
           </Navbar>
           <Col sm={8}>
             <Carousel>
               <Carousel.Item>
                 <img className="d-block w-100" src={Imagen5} alt="First slide"/>
                 <Carousel.Caption>
                   <h3>First slide label</h3>
                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img className="d-block w-100" src={Imagen1} alt="Second slide"/>
                 <Carousel.Caption>
                   <h3>Second slide label</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img className="d-block w-100" src={Imagen4} alt="First slide"/>       
                 <Carousel.Caption>
                   <h3>Third slide label</h3>
                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                 </Carousel.Caption>
               </Carousel.Item>
             </Carousel>
           </Col>
           <Col sm={4}>
             <Container>
               <br></br><br></br>
               <Form onSubmit={handleSubmit} >
                 <Form.Text className="text-center text-white">
                   <h1>LOGIN</h1> 
                 </Form.Text>
                 <br></br><br></br>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label><h5 className="text-white">Usuario</h5></Form.Label>
                   <Form.Control type="text" size="lg" placeholder="Ingrese su Usuario" name="username" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label><h5 className="text-white">Password</h5></Form.Label>
                   <Form.Control type="password" size="lg" placeholder="Password" name="password" />
                 </Form.Group>
                 <Button className="col-md-4 text-center" size="lg" variant="primary opacity-75" type="submit">
                   Ingresar
                 </Button>
               </Form>
             </Container>
           </Col>
         </Row>         
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