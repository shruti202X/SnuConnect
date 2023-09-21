import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './Feed.jsx';
import Project from './Project.jsx';
/*
import Contacts from './Contacts.jsx';
import Features from './Features.jsx';
import Integrations from './Integrations.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
*/
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Feed />}></Route>
        <Route exact path='/index.html' element={< Feed />}></Route>
        <Route path='/project' element={< Project />}></Route>
        {/*
        <Route path='/features' element={<Features />} />
        <Route path='/integrations' element={<Integrations />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        */}
      </Routes>
    </Router>
  );
}