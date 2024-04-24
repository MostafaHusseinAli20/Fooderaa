import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './script'
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar py-4" id='navbar' style={{
        position : "relative",
        zIndex : "10"
    }}>
      <Container>
        <Navbar.Brand className='fw-bolder fs-4' href="#">Foodera</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className=' mx-2 fw-bold ' href="#Home">Home</Nav.Link>
            <Nav.Link className=' mx-2 fw-bold ' href="#Pride">About Us</Nav.Link>
            <Nav.Link className=' mx-2 fw-bold ' href="#Explore">Explore Foods</Nav.Link>
            <Nav.Link className=' mx-2 fw-bold ' href="#Review">Reviews</Nav.Link>
            <Nav.Link className=' mx-2 fw-bold ' href="#FAQ">FAQ</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button className='btn-Nav text-light ms-3' variant="">1800 789 123</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;