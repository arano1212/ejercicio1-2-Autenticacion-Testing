import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useAuthContext } from '@/hooks/useAuth'

const Header = () => {
  const { isAuth, logout } = useAuthContext()

  return (
    <>
      <Navbar expand={false} className='bg-warning mb-3'>
        <Container fluid>
          <Navbar.Brand href='#'>Autenticacion</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Ejercicio 1
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {isAuth
                ? (
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/login' onClick={logout}>Logout</Nav.Link>
                  </Nav>
                  )
                : (
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link href='/login'>Login</Nav.Link>
                    <Nav.Link href='/signup'>Sing-Up</Nav.Link>
                  </Nav>
                  )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
