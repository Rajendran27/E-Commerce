import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { data, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';



const NavBarPanel = ({setResults}) => {


  const cartProducts = useSelector(state => state.cart);

  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json ())
    .then((json) => {
     
      const results = json.filter((user) =>{
        return value && user.name && user.name.tolowerCase().includes(value)

      })
      setResults(results);
    })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }


 

  return (
    
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">E - Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  to="/Home" as={Link}>Home</Nav.Link>
            <Nav.Link to="/Product" as={Link}>Products</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item  to="/Dress" as={Link}>Dress</NavDropdown.Item>
              <NavDropdown.Item to="/Electronics" as={Link}>
               Electronics
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>

 
 {/* <div className="mx-auto" style={{ width: '20%' }}>
            <div className="d-flex">
            <TextField 
              type="search"
              placeholder="Search"
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              InputProps={{
              startAdornment: (
              <InputAdornment position="start" border-radius="50px">
              <SearchIcon />
              </InputAdornment>
    ),
  }}
  aria-label="Search"
/>
            </div>
          </div> */}
          
          <div className="d-flex">

          
          <div className="d-flex align-items-between">
            <Nav.Link to="/cart" as={Link} className="me-3">
              <ShoppingCartIcon /> Cart {cartProducts.length}
            </Nav.Link>
           <NavDropdown title= < AccountCircleSharpIcon /> id="navbarScrollingDropdown align-item-center">
              <NavDropdown.Item to="/Login" as={Link}>Login</NavDropdown.Item>
              <NavDropdown.Item to="/Register" as={Link}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/Login" as={Link}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPanel;