import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function CardMenuRight(props) {
  return (
    <Container fluid className="main-structure">
      <Row>
        <Col sm={5} md={4} lg={3}>
          <Card className="default-card profile-index">
            <a title="Mi perfil" href="../html/profileLogged.html">
              <Card.Img
                id="profile-logged-image"
                alt="avatar"
                className="avatar avatar-perfil"
              />
            </a>
            <p id="profile-logged" />
          </Card>
          <Card className="default-card">
            <h4>
              <a
                className="fa-regular fa-address-book icon"
                href="usersGrid.html"
                title="Amigos"
              />
              AMIGOS
            </h4>
            <ListGroup>
              {props.friends.map((friend) => (
                <ListGroup.Item key={friend.id}>
                  <a href="" title={`Perfil ${friend.name}`}>
                    <img src={friend.avatar} alt="Avatar" className="avatar" />
                  </a>
                  {friend.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardMenuRight;





import React from 'react';
import CardMenuRight from './CardMenuRight';

function App() {
  const friends = [
    { id: 1, name: 'Adrian', avatar: '../img/avatares/adrian.png' },
    { id: 2, name: 'Lucia', avatar: '../img/avatares/lucia.png' },
    { id: 3, name: 'Stella', avatar: '../img/avatares/stella.png' },
  ];

  return (
    <div className="App">
      <CardMenuRight friends={friends} />
    </div>
  );
}

export default App;
