import './App.css';

// React
import React from 'react';
import { Route, Routes } from 'react-router-dom';


// Pages
import CalendarPage from './Pages/CalendarPage';
import MeetFormPage from './Pages/MeetFormPage';
import MeetListPage from './Pages/MeetListPage';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CalendarPage />} />
        <Route exact path="/meet_form" element={<MeetFormPage />} />
        <Route exact path="/meet_list" element={<MeetListPage />} />
      </Routes>
    </div>
  );
}

export default App;
