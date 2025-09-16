import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Kid.css";
import Kids from "../products/Kids";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cartSlice/Cartslice";



const Kid = () => {
  const cartProducts = useSelector((state) => state.cart.cartItem)
  const dispatch = useDispatch()


  const addCart = (item) => {
    dispatch(addToCart(item))
  }
  const deletes = (item) => {
    dispatch(deleteFromCart(item))

  }



  return (
    <div className="container mt-4">
      <div className="row">
        {
          Kids.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    ₹{item.price} <br /> {item.del} <br />{item.rating}
                  </p>
                  {cartProducts.find(items => items.id === item.id) ? (
                    <a href="#" className="btn btn-primary" onClick={() => { deletes(item) }}>
                      Delete From Cart
                    </a>
                  ) : (
                    <a href="#" className="btn btn-primary" onClick={() => { addCart(item) }}>
                      Add To Cart
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Kid;
