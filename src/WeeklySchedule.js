import React, { useState } from 'react';
import ScheduleForm from './ScheduleForm';
import ScheduleList from './ScheduleList';

function WeeklySchedule() {
  const [schedule, setSchedule] = useState({
    'Pondělí': [],
    'Úterý': [],
    'Středa': [],
    'Čtvrtek': [],
    'Pátek': [],
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');

  const handleAddSchedule = (newSchedule, day) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: [...prevSchedule[day], newSchedule]
    }));
    setShowForm(false); // Skryjeme formulář po přidání nových hodin
  };

  const handleOpenForm = (day) => {
    setSelectedDay(day);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h2>Souhrnný rozvrh pro celý týden</h2>
      <div className="row">
        {Object.keys(schedule).map((day, index) => (
          <div key={index} className="col-md-2">
            <h3>{day}</h3>
            <ScheduleList day={day} schedule={schedule[day]} />
            <button onClick={() => handleOpenForm(day)} className="btn btn-primary">Přidat hodiny</button>
          </div>
        ))}
      </div>
      {showForm && (
        <div className="mt-4">
          <h3>Přidat novou hodinu pro {selectedDay}</h3>
          <ScheduleForm day={selectedDay} onCloseForm={handleCloseForm} onAddSchedule={(newSchedule) => handleAddSchedule(newSchedule, selectedDay)} />
        </div>
      )}
    </div>
  );
}

export default WeeklySchedule;
