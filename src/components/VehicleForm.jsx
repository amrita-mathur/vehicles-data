import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { vehicleContext } from '../App';

function VehicleForm() {

  const [vin, setVin] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const setNewVehicle = useContext(vehicleContext);
  
  // const handleSubmit = () => {
  //   // const newId = vehicles.length + 1
  //   const newVehicle = {
  //    vin, make, model, year
  //   }
  //   setNewVehicle(newVehicle)
  // }
  return (
    <Form>
      <h1>Vehicle Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>VIN</Form.Label>
        <Form.Control type="text" placeholder="Enter VIN" value={vin} onChange={(e)=> setVin(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Make</Form.Label>
        <Form.Control type="text" placeholder="Enter make" value={make} onChange={(e)=> setMake(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" placeholder="Enter model" value={model} onChange={(e)=> setModel(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Year</Form.Label>
        <Form.Control type="number" placeholder="Enter year" value={year} onChange={(e)=> setYear(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default VehicleForm;