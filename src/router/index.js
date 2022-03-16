import React from "react";
import {
  Dashboard,
  MasterAdmin,
  Calander,
  Login,
  Locker,
  CreateEmployee,
  CreateBooking,
  Report,
  OccupentPage,
  Userlist,
  EditEmployeeForm
} from "../pages";
import { BrowserRouter, Route } from "react-router-dom";

const index = () => {
  return (
    <BrowserRouter>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/admin" component={MasterAdmin} />
      <Route exact path="/calander" component={Calander} /> 
      <Route exact path="/" component={Login} />
      <Route exact path="/locker" component={Locker} />
      <Route exact path="/createEmployee" component={CreateEmployee} />
      <Route exact path="/createBooking" component={CreateBooking} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/occupent" component={OccupentPage} />
      <Route exact path="/userlist" component={Userlist} />
      <Route exact path="/editEmployee" component={EditEmployeeForm} />
    </BrowserRouter>
  );
};

export default index;
