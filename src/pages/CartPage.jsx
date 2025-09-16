import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, updateToCart } from '../store/cartSlice/Cartslice';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const deleteCart = (item) => dispatch(deleteFromCart(item));

  const incrementCart = (id, quantity) => {
    dispatch(updateToCart({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateToCart({ id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className='container mt-4'>
      <h2 className='text-center mb-4'>My Cart</h2>

      {cartProducts.length === 0 ? (
        <p className='text-center'>Your cart is empty.</p>
      ) : (
        <div className='row'>
          {cartProducts.map((item) => (
            <div key={item.id} className='col-lg-8 mb-4'>
              <div className='card p-3'>
                <div className='d-flex align-items-center'>
                  <img src={item.img} alt={item.title} width={120} />
                  <div className='ms-3'>
                    <h5>{item.title}</h5>
                    <p>₹{item.price}</p>
                    <p>{item.des}</p>


                    <div>
                      <button
                        onClick={() => decrementCart(item.id, item.quantity)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className='mx-2'>{item.quantity}</span>
                      <button onClick={() => incrementCart(item.id, item.quantity)}>+</button>
                    </div>

                    <button
                      className='btn btn-danger mt-2'
                      onClick={() => deleteCart(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
