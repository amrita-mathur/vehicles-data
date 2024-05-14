import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Vehicle({vehicle}) {
  return (
    
    <Card style={{ width: '18rem', margin: '2rem' }}>
      <Card.Img variant="top" src={vehicle.image} />
      <Card.Body>
        <Card.Title>{vehicle.model}</Card.Title>
        <Card.Text>
          {vehicle.make}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Vehicle;