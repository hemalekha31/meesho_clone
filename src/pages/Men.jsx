import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mens.css";
import Mens from "../products/Mens";

const Men = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* 1st Row */}
        {Mens.map((item)=>(
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
            <img
              src={item.img}
              className="card-img-top"
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                ₹ {item.price} <strike>{item.oldprice}</strike><br /> {item.del}  <br /> {item.rating}
              </p>
              <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
        ))
        }
        
     

      </div>
      </div>
  );
};

export default Men;
