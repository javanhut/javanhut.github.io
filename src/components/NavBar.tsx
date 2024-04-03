import * as BS from 'react-bootstrap';
import { Button, Nav, Navbar,NavbarBrand, Form, FormControl, Container} from 'react-bootstrap';
import {Search }  from 'react-bootstrap-icons';
import { Linkedin, Youtube, Github } from 'react-bootstrap-icons';
import logo from '@/images/logo.png';
import Image from 'next/image';


function NavbarOverlay(){
    return (<><Navbar expand="lg"className='bg-body-teritiary' bg='dark' data-bs-theme="dark">
    <Container fluid>
    <NavbarBrand href="#home">
      <Image className='inline-block' src={logo} alt="Personal Logo" width={50} height={50} />
     <span>Javan Hutchinson</span> 
     </NavbarBrand>
     <Nav className='me-auto inline-block'>
      <BS.NavDropdown title="Links to Social Media" id="basic-nav-dropdown"> 
      <BS.NavDropdown.Item href="https://www.linkedin.com/in/javan-hutchinson/"><Linkedin/> LinkedIn</BS.NavDropdown.Item>
      <BS.NavDropdown.Item href="https://github.com/javanhut?tab=repositories"><Github /> GitHub</BS.NavDropdown.Item>
      <BS.NavDropdown.Item href="https://www.youtube.com/@EngineerSpaceCadet"><Youtube/> Youtube</BS.NavDropdown.Item>
      </BS.NavDropdown>

     </Nav>
    </Container>
      <Form className='d-flex inline-block'>
        <FormControl type="search" placeholder="Search" className="me-2" />
        <Button variant="outline-success"><Search color='white'/></Button>
      </Form>
  </Navbar></>);
}

export default NavbarOverlay;