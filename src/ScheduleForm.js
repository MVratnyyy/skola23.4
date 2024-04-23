import React, { useState } from 'react';

function ScheduleForm({ onAddSchedule }) {
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time || !subject || !room) return;
    onAddSchedule({ time, subject, room });
    setTime('');
    setSubject('');
    setRoom('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">Čas</label>
        <input type="text" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Předmět</label>
        <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="room" className="form-label">Učebna</label>
        <input type="text" className="form-control" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Přidat</button>
    </form>
  );
}

export default ScheduleForm;
