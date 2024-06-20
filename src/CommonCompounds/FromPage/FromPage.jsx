import React from "react";
import Images from "../../Images/Images";

function Form() {
  return (
    <div className="container Form-page pb-5">
      <div className="row gap-3">
        <div className="col-lg-8 col-md-6 col-sm-12 UserForm">
          <form action="">
            <div className="row mb-3">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name and Last Name"
                />
              </div>
            </div>
            <div className="row gap-3">
              <div className="col">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control pb-5"
                  placeholder="Special Request"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h6>Hotel Policy & Booking Conditions</h6>
                <p>
                  a) No Stag Policy - We do not allow bookings from stag groups
                  (men only groups) and would need to cancel in case of such a
                  booking. <br /> b) Token advance payment is required within 24
                  hours of booking. <br />
                  c) As per regulations, a valid government issued Photo ID has
                  to be carried by every person above the age of 18. The
                  identification proofs accepted are Aadhaar Card, Drivers
                  License, Voters Card, Passport. Without valid ID the guest
                  will not be allowed to check in. <br /> d) Due to our close
                  proximity to the jungle, in-room dining is not available at
                  our resort. This helps to keep stray animals and insects out
                  of the rooms, which can cause damage and discomfort.
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h6>Cancellation Policy</h6>
                <p>
                  The guest can cancel free of charge until 3 days before
                  arrival. The guest will be charged the total price of the
                  reservation if they cancel in the 3 days before arrival.
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="termsCheckbox">
                  <input type="checkbox" id="termsCheckbox" /> I acknowledge and
                  accept the Terms of Cancellation Policy & Hotel Policy
                </label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col  text-end">
                <button className="btn  btn-dark ">Book Now</button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 ">
          <div className="contanier GuestBooking ">
            <div className="col back-colors1">
              <h2>Book your Stay</h2>
            </div>
            <div className="row Restaurant ">
              <div className="col">
                <h6>The Rost Hotel and Restaurant</h6>
                <p>
                  Plot No. 8/323 Achakarai, Masinagudi, Tamil Nadu - 643223,
                  India.
                </p>
                <p>
                  <img src={Images.Call} alt="CALL" />{" "}
                  <span>+91-8047185939</span>
                </p>
                <p>
                  <img src={Images.mail} alt="MAIL" />{" "}
                  <span>+91-8047185939</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="row Restaurant">
              <div className="row pt-2 pb-2">
                <div className="col text-center">
                  <h6>Check In</h6>
                  <p>20/04/2024</p>
                </div>
                <div className="col">
                  <div class="vertical-line"></div>
                </div>
                <div className="col">
                  <h6>Check out</h6>
                  <p>20/04/2024</p>
                </div>
              </div>
              <div className="row pt-3 pb-3">
                <div className="col"><h6>1 Night Stay</h6></div>
                <div className="col"><h6>1</h6></div>
              </div>
            </div>
            <hr />
            <div className="row Restaurant ">
              <div className="col"><h6>Room & Rate Details</h6></div>
            </div>
            <hr />
            <div className="row Restaurant">
            <div className="col">
               <h6>Room :</h6>
               <p>Deluxe Room Only</p>
            </div>
          </div>
          <div className="row Restaurant pb-4">
            <div className="col">
               <h6>Guest Details</h6>
               <p>2 Adults, 0 Childere</p>
            </div>
          </div>
          <hr />
          <div className="row Restaurant">
            <div className="col-md-7">
              <p>Total Room Charges</p>
            </div>
            <div className="col ">
              <h6>Rs 3,825.00</h6>
            </div>
          </div>
          <div className="row Restaurant">
            <div className="col-md-7">
              <p>Total Taxes</p>
            </div>
            <div className="col ">
              <h6>Rs 3,825.00</h6>
            </div>
          </div>
          <hr />
          <div className="row Restaurant">
            <div className="col-md-7">
              <p>Total Taxes</p>
            </div>
            <div className="col ">
              <h6>Rs 3,825.00</h6>
            </div>
          </div>
         

          </div>
       
     
        </div>
      </div>
    </div>
  );
}

export default Form;
