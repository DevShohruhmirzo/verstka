import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Jadval from './pages/Jadval';
import Kurslar from './pages/Kurslar';
import Report from './pages/Report';
import Darslar from './pages/Darslar';
import Email from './pages/Email';
import Chat from './pages/Chat';
import Sozlamalar from './pages/Sozlamalar';
import Language from './pages/Language';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/jadval' element={<Jadval/>}/>
          <Route path='/kurslar' element={<Kurslar/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/darslar' element={<Darslar/>}/>
          <Route path='/email' element={<Email/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/sozlamalar' element={<Sozlamalar/>}/>
          <Route path='/language' element={<Language/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;