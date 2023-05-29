import React, { useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

const UserListPage = () => {

  let userslist = useSelector((state) => state.users);
  let toggle = useSelector((state) => state.toggle);

  useEffect(() => {
    // When it starts
  }, [toggle,userslist]);

  return (
    <div className="listusers-container">
      <div className="text-center mb-4">
        <h2 className="form-title">List of users</h2>
      </div>

      <Card style={{ width: '80%', margin: '0 auto', border: 'none',backgroundColor: "#fdfcfc" }} >
        {userslist.formData.map((user) => (
          <Card style={{ width: '70%', margin: '0 auto', border: 'none' ,backgroundColor: '#fdfcfc'}}  >
            <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
              <div className="profile-image-container">
                <img src={user.photo} alt="Profile" className="profile-image" />

                <div
                  className={`status-indicator ${user.status}`}
                  title={user.status}
                ></div>
              </div>
              <Container>
                <Row className="justify-content-center align-items-center">
                  <Col>
                    <strong>{user.name}</strong>
                  </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                  <Col>
                    <strong>{user.gender}</strong>
                  </Col>
                  <Col>
                    <strong>{user.birthDate}</strong>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        ))}
      </Card>
    </div>


  );
};

export default UserListPage;