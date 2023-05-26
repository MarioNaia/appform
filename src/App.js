
import './App.css';
import UserListPage from './pages/UserListPage';
import FormPage from './pages/FormPage';
import { useSelector } from 'react-redux';

const App = () => {

  const isRegisterOn = useSelector(state => state.isRegisterOn);


  return (
    <div className="register-container">
      {!isRegisterOn && (
        <div>
          <FormPage />
        </div>
      )}

      {isRegisterOn &&

        <div>
          <FormPage />
          <UserListPage />
        </div>
      }



    </div>

  );
};


export default App;
