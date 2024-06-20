import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../../Images/Images";
import Cads from "../Cads/Cads";
import Booking from "../Booking/BookingStay";
import GuestInformation from "../GuestInformation/GuestInformation";

const FiveColumnGrid = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: "Select Rooms" },
    { label: "Enhance Your Stay" },
    { label: "Guest Information" },
    { label: "Payment Information" }
  ];

  return (
    <Container>
      <Row className="Name">
        <Col>
          <div className="row">
            {steps.map((step, index) => (
              <div key={index} className="col-md-3">
                <div className={index + 1 < currentStep ? "circle completed" : index + 1 === currentStep ? "circle active" : "circle"}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={index + 1 === currentStep - 1 ? "arrow passed" : "arrow"}></div>
                )}
                <p className="circle-label">{step.label}</p>
              </div>
            ))}
          </div>

          <div className="row">
            <Cads />
          </div>
        </Col>
        <div className="col-lg-3 " > <GuestInformation /></div>    
       
      </Row>
    </Container>
  );
};

export default FiveColumnGrid;
