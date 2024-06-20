import React from "react";
import Images from "../../Images/Images";
import { NavLink } from "react-router-dom";

function Booking() {
  return (
    <div className="container Stay-booking2">
      <div className="col">
        <div className="row">
          <div className="col back-colors1">
            <h2>Book your Stay</h2>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row p-2">
          <div className="col-md-3">
            <h6>Date</h6>
          </div>
          <div className="col">
            <p>20 Apr 2024 - 21 Apr 2024</p>
          </div>
        </div>
      </div>
      <div className="row">
        <hr />
      </div>

      <div className="col">
        <div className="row p-2">
          <div className="col-md-3">
            <h6>Night</h6>
          </div>
          <div className="col">
            <h6>1</h6>
          </div>
        </div>
      </div>
      <div className="row">
        <hr />
      </div>
      <div className="col">
        <div className="row Deluxe-Room">
          <div className="col-md-8">
            <h6>Deluxe Room</h6>
            <p>2 Adults 0 Child 1 Room</p>
          </div>
          <div className="col text-end">
            <img src={Images.carbon_close} alt="carbon_close" />
          </div>
        </div>
      </div>
      <div className="row editImage">
        <div className="col">
          <img src={Images.edit} alt="" />
        </div>
        <div className="col text-end">
          <h6>Rs 3,825.00</h6>
        </div>
      </div>
      <div className="row">
        <hr />
      </div>
      <div className="col">
        <div className="row total-rate">
          <div className="col">
            <h6>Total</h6>
          </div>
          <div className="col text-end">
            <h6>Rs 3,825.00</h6>
          </div>
        </div>
      </div>
      <div className="row Buttonbtn text-center">
       
          <NavLink to="/exend-Your-Stay">
            <h6>Continue & Book Now</h6></NavLink>
        </div>
  
    </div>
  );
}

export default Booking;
