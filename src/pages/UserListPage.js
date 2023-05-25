import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import users from '../data/users';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserListPage = () => {
  // Sample user data
  const [userslist, setUsers] = useState('');


  useEffect(() => {
    // When it starts
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setUsers(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="listusers-container">

      <div className="text-center mb-4">
        <h2 className="form-title">List of users</h2>
      </div>

      {users.map((user) => (
        <div className="card flex-row flex-wrap mb-3 justify-content-center border-0" key={user.id} >
          <Card className="card flex-row flex-wrap mb-3 border-0" style={{ border: 'none' }}>
            <Card.Img variant="center" src={user.photo} className="circle-photo border-0" />
            <Badge pill className={`status-indicator ${user.status}`}></Badge>
            <div
              className={`status-indicator ${user.status}`}
              title={user.status}
            ></div>
          </Card>
          <Card className="card flex-row flex-wrap mb-3 border-0">
            <Card.Body >
              <Card.Title>{user.name}</Card.Title>
              <ListGroup className="list-group-flush" >
                <ListGroupItem>
                  Gender: <strong>{user.gender}</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Birth Date: <strong>{user.birthDate}</strong>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>

  );
};

export default UserListPage;