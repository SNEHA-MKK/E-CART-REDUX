import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slice/cartSlice'




function Cart() {

  const [total,setTotal] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
       setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handelCheckout =()=>{
    alert('order placed succesfully')
    dispatch(emptyCart)
    navigate('/')
  }

  return (
    <>
      { cartArray.length>0?(
              <div className="row mt-5">
        
         
              <div className="col-md-1"></div>
              <div className="col-md-7 mt-5 mb-5" style={{overflowX:'auto'}}>
                 <table className='table shadow w-100' >
                    <thead>
                       <tr>
                         <th>#</th>
                         <th>Product</th>
                         <th>Image</th>
                         <th>Price</th>
                         <th>Action</th>
                       </tr>
                    </thead>
     
                    <tbody>
                       {  cartArray.map((item,index)=>(
                            <tr>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td><img src={item.image} alt="" width={'150px'} height={'150px'} /></td>
                            <td>₹ {item.price}</td>
                            <td><button onClick={()=>dispatch(removeCartItem(item.id))} className='btn btn-outline-danger rounded'>< FontAwesomeIcon icon={faTrash} /></button></td>
                          </tr>
                       ))
                        }
                    </tbody>
                 </table>
              </div>
              <div className="col-md-3 mt-5">
                 <div className="shadow p-3 ">
                   <h1 className='text-primary '>Cart Summary</h1>
                   <h2>Total Number of products: <span className='text-warning'>{cartArray.length}</span></h2>
                   <h2>Total Price: ₹ <span className='text-warning'>{total}</span></h2>
                   <button onClick={handelCheckout} className='btn btn-success rounded mt-4 mb-3 w-100'>Check Out</button>
                 </div>
              </div>
              <div className="col-md-1"></div>
              </div>
      )
       
:

       <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
        <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <img src="https://cdn-icons-gif.flaticon.com/6172/6172531.gif" alt="empty cart" style={{width:'150px'}} />

          <h2 className='text-danger mt-4'>Your cart is empty</h2>
          <Link to={'/'}><button className='btn btn-success p-3 rounded mt-2'><FontAwesomeIcon className='me-3' icon={faArrowLeft} />Back to home</button></Link>
          </div>
          
          <div className="col-md-4"></div>
         
          

        </div>}
        

    </>
  )
}

export default Cart
