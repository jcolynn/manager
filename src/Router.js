/*One location to house everywhere a user can go in the app.
  Defines all routes a user can visit */
//Imports
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import { Actions } from 'react-native-router-flux';

//Function Component
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm}  title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            rightTitle="Add"
            onRight={() =>  Actions.employeeCreate() }
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
