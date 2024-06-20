import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../../Images/Images";
import BookingRooms from "../BookingRooms/BookingRooms";
import Booking from "../Booking/BookingStay";

const FiveColumnGrid = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const getCircleClass = (step) => {
    if (step < currentStep) return "circle completed";
    if (step === currentStep) return "circle active";
    return "circle";
  };

  return (
    <Container mt-5>
      <Row className="Name">
        <Col>
          <div className="row ">
            <div className="col-md-3">
              <div className={getCircleClass(1)}>1</div>
              <p className="circle-label">Select Rooms</p>
            </div>
            <div className="col-md-3">
              <div className={getCircleClass(2)}>2</div>
              <p className="circle-label">Enhance Your Stay</p>
            </div>
            <div className="col-md-3">
              <div className={getCircleClass(3)}>3</div>
              <p className="circle-label">Guest Information</p>
            </div>
            <div className="col-md-3">
              <div className={getCircleClass(4)}>4</div>
              <p className="circle-label">Payment Information</p>

              <div className="row text-center">
                <div className="col-md-12">
                  <button className="filter">
                    <img src={Images.filter} alt="filter" />
                    <span className="Filter-Your-Search">
                      Filter Your Search
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <BookingRooms />
          </div>
        </Col>
       <div className="col-lg-3 " > <Booking /></div>    
    
      </Row>
    </Container>
  );
};

export default FiveColumnGrid;
