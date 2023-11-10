import React from 'react'
import CarCard from './CarCard'
import { Button } from 'react-bootstrap'
const CarsList = (props) => {
  return (
    <>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:'space-around',margin:"3% 0",border:"5px solid black",padding:"1rem"}}>
      {props.car.map((carData , index)=><CarCard car={carData} key={index} />)}
    </div>
    <Button style={{marginLeft:"45%"}}>Click</Button>
    </>
  )
  
}

export default CarsList
