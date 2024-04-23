import React from 'react';
import ScheduleList from './ScheduleList';

function DayView({ day }) {
  return (
    <div>
      <h2>Rozvrh pro {day}</h2>
      <ScheduleList day={day} />
    </div>
  );
}

export default DayView;
