function WeeklySchedule() {
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
      <div>
        <h2>Souhrnný rozvrh pro celý týden</h2>
        <div className="row">
          <div className="col-md-2">
            <h3>Pondělí</h3>
            <ScheduleList day="Pondělí" schedule={schedule['Pondělí']} />
            <ScheduleForm onAddSchedule={(newSchedule) => handleAddSchedule(newSchedule, 'Pondělí')} />
          </div>
          {/* Zbývající dny */}
        </div>
      </div>
    );
  }
  