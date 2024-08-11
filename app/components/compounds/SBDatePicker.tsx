import {
  addDays, startOfMonth,
  subMonths, addMonths, isToday
} from 'date-fns';
import{ useState } from 'react';

const SBDatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  //const [availableHours, setAvailableHours] = useState([9, 10, 11, 14, 15, 16]);
  //const [availableMinutes, setAvailableMinutes] = useState([0, 5, 10, 15, 30, 45]);
    const availableHours = [9, 10, 11, 14, 15, 16];
    const availableMinutes = [0, 5, 10, 15, 30, 45];

  const handleTodayClick = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = new Date(currentDate.setMonth(parseInt(event.target.value)));
    setCurrentDate(newDate);
  };
  
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = new Date(currentDate.setFullYear(parseInt(event.target.value)));
    setCurrentDate(newDate);
  };    

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Handle hour selection
    console.log('Selected Hour:', event.target.value);
  };
  
  const handleMinuteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Handle minute selection
    console.log('Selected Minute:', event.target.value);
  };

  const startDay = startOfMonth(currentDate);
  //const endDay = endOfMonth(currentDate);
  //const daysInMonth = getDaysInMonth(currentDate);
  
  const gridDays = [];
  let dayPointer = subMonths(startDay, 1);

  while (gridDays.length < 42) {
    gridDays.push(dayPointer);
    dayPointer = addDays(dayPointer, 1);
  }

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between p-2">
        <button onClick={handleTodayClick} className="btn">Today</button>
        <div className="flex items-center">
          <button onClick={handlePrevMonth} className="btn">←</button>
          <select onChange={handleMonthChange} value={currentDate.getMonth()} className="dropdown">
            {Array.from({ length: 12 }, (v, k) => (
              <option key={k} value={k}>{new Date(0, k).toLocaleString('default', { month: 'long' })}</option>
            ))}
          </select>
          <select onChange={handleYearChange} value={currentDate.getFullYear()} className="dropdown">
            {Array.from({ length: 10 }, (v, k) => (
              <option key={k} value={currentDate.getFullYear() - 5 + k}>{currentDate.getFullYear() - 5 + k}</option>
            ))}
          </select>
          <button onClick={handleNextMonth} className="btn">→</button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {gridDays.map((day, idx) => {
          const isCurrentMonth = day.getMonth() === currentDate.getMonth();
          const isSelected = day.toDateString() === selectedDate.toDateString();
          const isUnavailable = false; // Replace with actual logic for unavailable dates
          const isTodayDate = isToday(day);

          return (
            <button
              key={idx}
              onClick={() => !isUnavailable && handleDateClick(day)}
              className={`p-2 text-center ${isCurrentMonth ? '' : 'text-gray-400'} ${isSelected ? 'bg-blue-500 text-white' : ''} ${isUnavailable ? 'bg-gray-200 cursor-not-allowed' : 'cursor-pointer'} ${isTodayDate ? 'border-2 border-blue-500' : ''}`}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>

      {/* Time Selection */}
      <div className="flex space-x-2 mt-2">
        <select onChange={handleHourChange} className="dropdown">
          {Array.from({ length: 24 }, (_, hour) => (
            <option key={hour} value={hour} disabled={!availableHours.includes(hour)}>{hour.toString().padStart(2, '0')}</option>
          ))}
        </select>
        <select onChange={handleMinuteChange} className="dropdown">
          {Array.from({ length: 12 }, (_, idx) => idx * 5).map((minute) => (
            <option key={minute} value={minute} disabled={!availableMinutes.includes(minute)}>{minute.toString().padStart(2, '0')}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SBDatePicker;
