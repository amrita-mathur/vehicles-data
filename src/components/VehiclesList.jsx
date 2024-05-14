import React from 'react';
import Vehicle from "./Vehicle";
import {Row} from "react-bootstrap";

const VehiclesList = ({vehicles}) => {
  return (
    <Row className='my-5'>
        {vehicles.map((vehicle)=> (
            <Vehicle vehicle={vehicle} key={vehicle.id}/>
        ))}
    </Row>
  )
}

export default VehiclesList;