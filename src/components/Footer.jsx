import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div  style={{overflowX:'hidden'}}>
      <div className="row mt-5 bg-primary text-light p-3">
        <div className="col-md-4 ">
           <div className='d-flex'>
           
           <h1 className='fs-3'><FontAwesomeIcon icon={faCartShopping} className='me-3'/>E-CART</h1>
           </div>
           <p  style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magnam exercitationem minus similique eos, eum ipsam non repellat consectetur possimus alias aperiam fugit cum minima odit, mollitia, corporis impedit adipisci.</p>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-2">
          

           <h4>Links</h4>

        <Link to={'/'}><p className='mt-3 text-light'>Home Page</p></Link>
        <Link to={'/wishlist'}><p className='text-light'>WishList</p></Link>
        <Link to={'/cart'}><p className='text-light'>Cart</p></Link>
        </div>
        
        <div className="col-md-2">
        <h4>Guides</h4>
        <p className='mt-3'>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
        </div>
        <div className="col-md-3">
                <h4>Contact Us</h4>
                <div className='d-flex mt-3'>
            <input type="text" placeholder='EMAIL ID' className='form-control' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-between mt-4'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl' />
            <FontAwesomeIcon icon={faTwitter}  size='2xl'/>
            <FontAwesomeIcon icon={faLinkedin}  size='2xl'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
