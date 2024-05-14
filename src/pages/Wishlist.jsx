import React from 'react'
import { faArrowLeft, faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removewishlistItem } from '../redux/slice/wishlistSlice';
import { addCartItem } from '../redux/slice/cartSlice';


function Wishlist() {
  const  WishlistArray = useSelector((state)=>state.wishlistReducer)
   console.log(WishlistArray);

   const dispatch = useDispatch()

   const handleAdd = (product)=>{
      dispatch(addCartItem(product))
      dispatch(removewishlistItem(product.id))
   }

  return (
    <div>
       <div className="row mt-5 pt-5 ms-5 me-3">
         {  WishlistArray?.length>0?
            WishlistArray.map((product)=>(
              <div className="col-md-3">

              <Card className='w-100 rounded shadow border-0' style={{ width: '16rem' }}>
                <Card.Img variant="top" src={product.image} height={150} />
                <Card.Body>
                  <Card.Title>{product.title.slice(0,20)}</Card.Title>
                  <Card.Text>
                  {product.description.slice(0,45)}
                  </Card.Text>
                  <p><b>₹ {product.price}</b>:</p>
                  <div className='d-flex justify-content-between align-items-center'>
                  <button onClick={()=>dispatch(removewishlistItem(product.id))} className='border border-danger p-2'><FontAwesomeIcon  icon={faTrash} style={{color: "#df2020",}} /></button>
                  <button onClick={()=>handleAdd(product)} className='border border-success p-2'><FontAwesomeIcon  icon={faCartPlus} style={{color: "#275e13",}} /></button>
                  </div>
                </Card.Body>
              </Card>
    
            </div>
            ))
           
            :
        <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
        <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <img src="https://cdn-icons-gif.flaticon.com/6172/6172531.gif" alt="empty cart" style={{width:'150px'}} />

          <h2 className='text-danger mt-4'>Your wishlist is empty</h2>
          <Link to={'/'}><button className='btn btn-success p-3 rounded mt-2'><FontAwesomeIcon className='me-3' icon={faArrowLeft} />Back to home</button></Link>
          </div>
          
          <div className="col-md-4"></div>
         
          

        </div>}

    </div>
    </div>
  )
}

export default Wishlist
