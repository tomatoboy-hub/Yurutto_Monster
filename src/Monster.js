// import React from 'react';

// function Monster({ name, image, Level }) {
//   return (
//     <li>
//       <h2>{name}</h2>
//       <img src={image}/>
//       <p>レベル: {Level}</p>
//     </li>
//   );
// }

// export default Monster;

import Card from 'react-bootstrap/Card';

function Monster({ name, image, Level }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         レベル：{Level}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Monster;
