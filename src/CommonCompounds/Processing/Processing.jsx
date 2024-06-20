import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../../Images/Images";
import BookingRooms from "../BookingRooms/BookingRooms";
import Booking from "../Booking/BookingStay";

const Processing = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: "Select Rooms" },
    { label: "Enhance Your Stay" },
    { label: "Guest Information" },
    { label: "Payment Information" }
  ];

  const getCircleClass = (stepIndex) => {
    if (stepIndex < currentStep) return "circle completed";
    if (stepIndex === currentStep) return "circle active";
    return "circle";
  };

  return (
    <Container>
      <Row className="Name">
        <Col>
          <div className="row">
            {steps.map((step, index) => (
              <div key={index} className={`col-md-3 ${index === 0 ? 'col-md-2' : 'col-md-3'}`}>
                <div className={getCircleClass(index + 1)}>{index + 1}</div>
                {index < steps.length - 1 && <div className={index < currentStep - 1 ? 'arrow passed' : 'arrow'}></div>}
                <p className="circle-label">{step.label}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Processing;
