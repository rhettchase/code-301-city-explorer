import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <header>
      <Navbar expand='lg' className='navBar'>
        <Container>
          <Navbar.Brand href='index.html'>City Explorer</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='index.html'>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
