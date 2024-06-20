import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Images from "../../Images/Images";

const roomsData = [
  {
    id: 1,
    type: "Deluxe Room",
    capacity: "2 Adults 0 Children",
    maxCapacity: "2",
    size: "400 sq.ft",
    price: "Rs 3,375.00",
    priceInfo: "Price for 1 Night",
    adults: "2 Adults ,",
    children: " 0 Child ,",
    room: " 1 Room",
    imageUrl: Images.Rooms,

  },
  {
    id: 2,
    type: "Deluxe Room with Breakfast",
    capacity: "2 Adults 0 Children",
    maxCapacity: "2",
    size: "400 sq.ft",
    price: "Rs 3,825.00",
    priceInfo: "Price for 1 Night",
    adults: "2 Adults ,",
    children: " 0 Child ,",
    room: " 1 Room",
 
  },
  {
    id: 3,
    type: "Deluxe Room with Breakfast and Lunch or Dinner",
    capacity: "2 Adults 0 Children",
    maxCapacity: "2",
    size: "400 sq.ft",
    price: "Rs 4,425.00",
    priceInfo: "Price for 1 Night",
    adults: "2 Adults ,",
    children: " 0 Child ,",
    room: " 1 Room",

  },
  {
    id: 4,
    type: "Deluxe Room with All 3 Meals",
    capacity: "2 Adults 0 Children",
    maxCapacity: "2",
    size: "400 sq.ft",
    price: "Rs 4,425.00",
    priceInfo: "Price for 1 Night",
    adults: "2 Adults ,",
    children: " 0 Child ,",
    room: " 1 Room",

  },
  // Add more room objects...
];

function BookingRooms() {
  const [roomCounts, setRoomCounts] = useState(
    roomsData.reduce((acc, room) => {
      acc[room.id] = 1;
      return acc;
    }, {})
  );

  const [adultCounts, setAdultCounts] = useState(
    roomsData.reduce((acc, room) => {
      acc[room.id] = 1;
      return acc;
    }, {})
  );

  const [childrenCounts, setChildrenCounts] = useState(
    roomsData.reduce((acc, room) => {
      acc[room.id] = 0;
      return acc;
    }, {})
  );

  const handleIncrement = (roomId) => {
    setRoomCounts((prevCounts) => ({
      ...prevCounts,
      [roomId]: prevCounts[roomId] + 1,
    }));
  };

  const handleDecrement = (roomId) => {
    if (roomCounts[roomId] > 1) {
      setRoomCounts((prevCounts) => ({
        ...prevCounts,
        [roomId]: prevCounts[roomId] - 1,
      }));
    }
  };

  const handleAdultsChange = (roomId, value) => {
    setAdultCounts((prevCounts) => ({
      ...prevCounts,
      [roomId]: value,
    }));
  };

  const handleChildrenChange = (roomId, value) => {
    setChildrenCounts((prevCounts) => ({
      ...prevCounts,
      [roomId]: value,
    }));
  };

  return (
    <Container className="Deluxe-Box">
      {roomsData.map((room) => (
        <Row key={room.id} className="mt-2">
          <Col xs={12} md={5}>
            <Image src={room.imageUrl} className="img-fluid" />
          </Col>
          <Col xs={12} md={7} className="Capacity">
            <Row>
              <Col>
                <h6>
                  {room.type}{" "}
                  <span className="Ex">
                    <img src={Images.DeluxeRoom} alt="Exclusive" />
                  </span>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col className="Maximum-Capacity">
                <p>Room Capacity: {room.capacity}</p>
                <p>Maximum Capacity: {room.maxCapacity}</p>
                <p>Room size: {room.size}</p>
              </Col>
            </Row>
            <Row>
              <hr />
              <Col>
                <h6 className="Rates">
                  Room Rates Exclusive of Tax{" "}
                  <span className="Ex">
                    <img src={Images.DeluxeRoom} alt="Exclusive" />
                  </span>
                </h6>
              </Col>
              <Col className="Rates-Exclusive text-end">
                <h5>{room.price}</h5>
                <p className="Price-details">
                  {room.priceInfo} <br /> {room.adults} {room.children}{" "}
                  {room.room}
                </p>
              </Col>
              <hr />
            </Row>
            <Row className="Enquiry-Count">
              <Col>
                <p>Enquiry </p>
              </Col>
              <Col className="text-end">
                <button
                  className="AddRooms1"
                  onClick={() => handleDecrement(room.id)}
                >
                  <span className="Minus">-</span>
                </button>
                <span className="num">{roomCounts[room.id]}</span>
                <button
                  className="AddRooms2"
                  onClick={() => handleIncrement(room.id)}
                >
                  <span className="plus">+</span>
                </button>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <span>Room {room.id}</span>
              </Col>
              <Col md={3}>
                <span>
                  Adults{" "}
                  <select
                    id={`adults-${room.id}`}
                    onChange={(e) =>
                      handleAdultsChange(room.id, e.target.value)
                    }
                    value={adultCounts[room.id]}
                  >
                    {[...Array(parseInt(room.maxCapacity)).keys()].map(
                      (num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      )
                    )}
                  </select>
                </span>
              </Col>
              <Col md={3}>
                <span>
                  Child{" "}
                  <select
                    id={`children-${room.id}`}
                    onChange={(e) =>
                      handleChildrenChange(room.id, e.target.value)
                    }
                    value={childrenCounts[room.id]}
                  >
                    {[...Array(parseInt(room.maxCapacity)).keys()].map(
                      (num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      )
                    )}
                  </select>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default BookingRooms;
