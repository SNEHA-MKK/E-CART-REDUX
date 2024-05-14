import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { addWishlistItem } from '../redux/slice/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../redux/slice/cartSlice';


function Home() {

  const dispatch = useDispatch()


 const data = useFetch('https://fakestoreapi.com/products')

    console.log(data);

  return (
    <div>
      <div className="row mt-5 ps-5 pt-5 ms-5 me-3">
       { data?.length > 0 ?
       data?.map((product)=>(
        <div className="col-md-3 mb-5">

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={product.image} height={150} />
          <Card.Body>
            <Card.Title>{product.title.slice(0,20)}</Card.Title>
            <Card.Text>
              {product.description.slice(0,45)}
            </Card.Text>
            <p><b>Price</b>:₹{product.price}</p>
            <div  className='d-flex justify-content-between align-items-center'>
            <button onClick={()=>dispatch(addWishlistItem(product))} className='border border-danger p-2'><FontAwesomeIcon  icon={faHeart} style={{color: "#ed0c2e",}} /></button>
            <button onClick={()=>dispatch(addCartItem(product))} className='border border-success p-2'><FontAwesomeIcon  icon={faCartPlus} style={{color: "#275e13",}} /></button>
            </div>
          </Card.Body>
        </Card>

        </div>
       )) :
       <p>Nothing to display</p>
        }
        {/* <div className="col-md-3">
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://www.suryaelectronics.in/CommonImageHandler/ImageHandler.ashx?imagepath=~/img/Product/Main/oppoMobilePhonesandAccessoriesMobilePhones307.jpg&width=1080" height={150}/>
            <Card.Body>
              <Card.Title>iPhone 9...</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
               ...
              </Card.Text>
              <p><b>Price</b>:₹549</p>
              <div className='d-flex justify-content-between align-items-center'>
              <FontAwesomeIcon className='border border-danger p-2' icon={faHeart} style={{color: "#ed0c2e",}} />
              <FontAwesomeIcon className='border border-success p-2' icon={faCartPlus} style={{color: "#275e13",}} />
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA2U3xopSuOfOMdVgNJYjhsqgHbfIpFn6_sEvk4GEJg&s" height={150}/>
            <Card.Body>
              <Card.Title>iPhone 9...</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
               ...
              </Card.Text>
              <p><b>Price</b>:₹549</p>
              <div className='d-flex justify-content-between align-items-center'>
              <FontAwesomeIcon className='border border-danger p-2' icon={faHeart} style={{color: "#ed0c2e",}} />
              <FontAwesomeIcon className='border border-success p-2' icon={faCartPlus} style={{color: "#275e13",}} />
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://www.suryaelectronics.in/img/Product/Main/oppoMobilePhonesandAccessoriesMobilePhones126.jpg" height={150} />
            <Card.Body>
              <Card.Title>iPhone 9...</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
               ...
              </Card.Text>
              <p><b>Price</b>:₹549</p>
              <div className='d-flex justify-content-between align-items-center'>
              <FontAwesomeIcon className='border border-danger p-2' icon={faHeart} style={{color: "#ed0c2e",}} />
              <FontAwesomeIcon className='border border-success p-2' icon={faCartPlus} style={{color: "#275e13",}} />
              </div>
            </Card.Body>
          </Card>
        </div> */}

        
      </div>

      
    </div>
  )
}

export default Home
