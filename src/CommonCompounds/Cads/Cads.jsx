import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Images from "../../Images/Images";
// Import the CSS file

const cardData = [
  {
    id: 1,
    imageSrc: Images.Rooms,
    title: "Cricket",
    text: "Some quick example text to build on the card title ",
  },
  {
    id: 2,
    imageSrc: Images.Rooms,
    title: "Archery",
    text: "Some quick example text to build on the card title ",
  },
  {
    id: 3,
    imageSrc: Images.Rooms,
    title: "Pool table",
    text: "Some quick example text to build on the card title ",
  },
  {
    id: 4,
    imageSrc: Images.Rooms,
    title: "Airhockey",
    text: "Some quick example text to build on the card title ",
  },
  {
    id: 5,
    imageSrc: Images.Rooms,
    title: "Cycling",
    text: "Some quick example text to build on the card title ",
  },
  {
    id: 6,
    imageSrc: Images.Rooms,
    title: "PS4 Single player game",
    text: "Some quick example text to build on the card title ",
  },
];

function Cards() {
  const [quantities, setQuantities] = useState({});

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <Card key={card.id} className="card-item">
          <Card.Img variant="top" src={card.imageSrc} />
          <Card.Body>
            <Card.Title>
              <h3 className="card-title">
                {card.title}{" "}
                <img className="opinion" src={Images.rooms} alt="!" />
              </h3>
            </Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <button
              className="handleIncrease"
              onClick={() => handleDecrease(card.id)}
            >
              -
            </button>
            <span className="Zero" style={{ padding: "0px 10px 0px 11px "  }}>
              {quantities[card.id] || 0}
            </span>
            <button
              className="handleIncrease" 
              onClick={() => handleIncrease(card.id)}
            >
              +
            </button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
