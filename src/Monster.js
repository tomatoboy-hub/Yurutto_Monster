import './charalist.css';
import Card from 'react-bootstrap/Card';

function Monster({ name, image, level, spring }) {
  return (
    <Card className = "card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         成長度：{level}<br/>
         住処：{spring}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Monster;
