import React from 'react';

function ScheduleList({ day }) {
  // Náhodné rozvrhy pro každý den v týdnu
  const schedules = {
    'Pondělí': [
      { time: '8:00', subject: 'Matematika', room: 'A101' },
      { time: '9:30', subject: 'Fyzika', room: 'B203' },
      { time: '11:00', subject: 'Chemie', room: 'C305' },
      { time: '13:00', subject: 'Dějepis', room: 'D102' },
      { time: '14:30', subject: 'Angličtina', room: 'E204' },
    ],
    'Úterý': [
      { time: '8:00', subject: 'Biologie', room: 'B101' },
      { time: '9:30', subject: 'Dějepis', room: 'D203' },
      { time: '11:00', subject: 'Matematika', room: 'C305' },
      { time: '13:00', subject: 'Fyzika', room: 'A102' },
      { time: '14:30', subject: 'Angličtina', room: 'E204' },
    ],
    'Středa': [
      { time: '8:00', subject: 'Chemie', room: 'C101' },
      { time: '9:30', subject: 'Angličtina', room: 'B203' },
      { time: '11:00', subject: 'Biologie', room: 'D305' },
      { time: '13:00', subject: 'Matematika', room: 'D102' },
      { time: '14:30', subject: 'Fyzika', room: 'E204' },
    ],
    'Čtvrtek': [
      { time: '8:00', subject: 'Dějepis', room: 'A101' },
      { time: '9:30', subject: 'Chemie', room: 'C203' },
      { time: '11:00', subject: 'Angličtina', room: 'D305' },
      { time: '13:00', subject: 'Biologie', room: 'D102' },
      { time: '14:30', subject: 'Matematika', room: 'E204' },
    ],
    'Pátek': [
      { time: '8:00', subject: 'Fyzika', room: 'B101' },
      { time: '9:30', subject: 'Angličtina', room: 'E203' },
      { time: '11:00', subject: 'Dějepis', room: 'C305' },
      { time: '13:00', subject: 'Biologie', room: 'D102' },
      { time: '14:30', subject: 'Chemie', room: 'E204' },
    ],
  };

  const schedule = schedules[day];

  return (
    <div>
      <h3 className="mt-4"></h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Čas</th>
            <th>Předmět</th>
            <th>Učebna</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.subject}</td>
              <td>{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleList;
