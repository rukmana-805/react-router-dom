import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import Page404 from './Pages/Page404';

import {BrowserRouter, Route, Routes} from "react-router-dom";
//import { Navigate } from 'react-router-dom';

import Users from './Pages/Users';
import Filters from './Pages/Filters';
import Company from './Pages/Company';
import Youtube from './Pages/Youtube';
import Others from './Pages/Other';
import Login from './Pages/Login';
import Protected from './Pages/Protected';
import Secret from './Pages/Secret';

function App(props) {
  // console.log(props.isLogin);
  localStorage.setItem("name",false);
  localStorage.setItem("password",false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/about" element = {<About/>} />
          <Route path = "/filters" element = {<Filters/>} />

          {/* <Route path = "/*" element = {<Page404/>} /> */}

          {/* Here * means when a link that clicked has tot given a proper
          path then it redirect to Page404 page. */}
          
          {/* If you not want to nevigate to Page404 page and if someone click a link that doesn't have a proper path and
          you want to redirect to HOME page that you can do throung <Nagigate to="path"/> state */}
          {/* <Route path = "/*" element = {<Navigate to="/"/>}/> */}
          
          {/* showing details of users after clicking their name in users page dynamically */}
          <Route path="/users/:name" element = {<Users/>}/> {/* :name specify users ra ken user call heba link k click karle*/}
          
          {/* Learning Nested Routing below */}
          <Route path = "/contact" element = {<Contact/>}>
            <Route path="company" element = {<Company/>}/> {/* Remember no "/company" here only "company" */}
            <Route path="youtube" element = {<Youtube/>}/>
            <Route path="others" element = {<Others/>}/>
          </Route>
          <Route path="/login" element = {<Login/>}/>
          
          <Route path="/secret" element = {<Protected Comp={Secret}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
