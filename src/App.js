import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import DayView from './DayView';
import WeeklySchedule from './WeeklySchedule'; // Importujeme WeeklySchedule

function App() {
  const [schedule, setSchedule] = useState({
    'Pondělí': [],
    'Úterý': [],
    'Středa': [],
    'Čtvrtek': [],
    'Pátek': [],
  });

  const handleAddSchedule = (newSchedule, day) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: [...prevSchedule[day], newSchedule]
    }));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monday" element={<DayView day="Pondělí" />} />
          <Route path="/tuesday" element={<DayView day="Úterý" />} />
          <Route path="/wednesday" element={<DayView day="Středa" />} />
          <Route path="/thursday" element={<DayView day="Čtvrtek" />} />
          <Route path="/friday" element={<DayView day="Pátek" />} />
          {/* Přidejte další routy pro další dny */}
        </Routes>
      </div>
      <WeeklySchedule schedule={schedule} onAddSchedule={handleAddSchedule} /> {/* Přidáváme WeeklySchedule komponentu s rozvrhem a funkcí na přidání nových hodin */}
    </Router>
  );
}

function Home() {
  return <h2>Domovská stránka - Obecný přehled</h2>;
}

export default App;
