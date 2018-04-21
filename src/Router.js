/*One location to house everywhere a user can go in the app.
  Defines all routes a user can visit */
//Imports
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

//Function Component
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm}  title="Please Login" initial />
        <Scene key="employeeList" component={EmployeeList} title="Employee List" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
