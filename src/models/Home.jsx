import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function Home() {
    return(
        <>
         <Row>
           <Navbar bg="primary" variant="dark">
             <Container>
               <Navbar.Brand href="/home"><h4>InstaYa Envios</h4></Navbar.Brand>
                 <Nav className="ms-auto">
                 <div className="bg-light vr" />
                 <Nav.Link href="/crearOrden"><h5>Crear Orden</h5></Nav.Link>   
                 <div className="bg-light vr" />
                 <Nav.Link href="/"><h5>Logout</h5></Nav.Link>
               </Nav>               
             </Container>           
           </Navbar>
         </Row>
         <br></br><br></br><br></br>
         <Container>
           <Row className="justify-content-md-center">
             <Col className="bg-primary opacity-75 text-center text-white gx-5 rounded rounded-xxl" lg="12">
             <h1>Listado de Envios</h1> 
             </Col>             
           </Row>
         </Container>
         <br></br>
         <Container>            
           <Col className="bg-primary opacity-80 gx-5 rounded rounded-xxl" lg="12">  
             <Row className="justify-content-md-center">
               <Table striped bordered hover variant="dark opacity-95">
                 <thead>
                   <tr>
                     <th># Id</th>
                     <th>Fecha</th>
                     <th>Ciudad Entrega</th>
                     <th>Nombre Contacto</th>
                     <th>Dirección Envío</th>
                     <th>Teléfono</th>
                     <th>Estado</th>
                     <th>Acción</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td>
                      <Button className="col-md-7" size="sm" variant="danger" type="submit">
                       Editar
                     </Button></td>
                   </tr>
                   <tr>
                     <td>2</td>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td>
                      <Button className="col-md-7" size="sm" variant="danger" type="submit">
                        Editar
                      </Button></td>
                   </tr>
                   <tr>
                     <td>3</td>
                     <td>Larry the Bird</td>
                     <td>@twitter</td>
                     <td>@fat</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                     <td>
                      <Button className="col-md-7" size="sm" variant="danger" type="submit">
                        Editar
                      </Button></td>
                   </tr>
                 </tbody>
               </Table>
             </Row>
           </Col>
         </Container>
       </>
    )
     
}