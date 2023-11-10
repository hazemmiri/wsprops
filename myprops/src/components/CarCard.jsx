import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CarCard = ({car}) => {

    console.log(car)
  return (
    <Card className='car-cad' style={{ width: '18rem' }}>
    <Card.Img style={{height:"30vh"}}variant="top" src={car.image} />
    <Card.Body>
      <Card.Title>{car.name}</Card.Title>
      <Card.Text>
      A football player or footballer is a sportsperson who plays one of the different types of football. The main types of football are association football, .
      </Card.Text>
      <Button variant="primary">Player foot</Button>
    </Card.Body>
  </Card>
  )
}

export default CarCard
