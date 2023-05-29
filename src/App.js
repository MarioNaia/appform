
import './App.css';
import UserListPage from './pages/UserListPage';
import FormPage from './pages/FormPage';
import { useSelector } from 'react-redux';
import React from 'react';

const App = () => {


  const toggle = useSelector((state) => state.toggle);


  return (
    <div className="register-container">
      <FormPage />
      {toggle.toggle &&
        <UserListPage />
      }
    </div>

  );
};


export default App;
