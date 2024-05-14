import { faCartPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {
   const wishlistArray = useSelector((state)=>state.wishlistReducer)
   console.log(wishlistArray);

   const cartArray = useSelector((state)=>state.cartReducer)
   console.log(cartArray);

  return (
    <div>
      <Navbar expand="lg" className="bg-primary w-100 " style={{position:'fixed',top:'0px',zIndex:'1'}}>
      <Container>

        <Link to={'/'}>
            <Navbar.Brand className='text-light' ><FontAwesomeIcon icon={faCartShopping} beat className='me-3' /><b> E-cart</b></Navbar.Brand>
        
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

          <Nav.Link >
            <Link to={'/wishlist'}>
                
                    <button className='btn btn-outline-light border rounded'><FontAwesomeIcon icon={faHeart} style={{color: "#e40712",}} className='me-2' />Wishlist <Badge bg="secondary" className='rounded'>{wishlistArray.length}</Badge></button>
                
            </Link>
            </Nav.Link>

            <Nav.Link >
            <Link to={'/cart'}>
                
                    <button className='btn btn-outline-light border rounded'><FontAwesomeIcon icon={faCartPlus} style={{color: "#FFD43B",}} className='me-2' /> Cart <Badge bg="secondary" className='rounded'>{cartArray.length}</Badge></button>
                
            </Link>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
