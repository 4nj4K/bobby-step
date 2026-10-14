'use client';

import { useState, useEffect, use } from 'react';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
  'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'
];

const DAYS_OF_WEEK = ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'];

export default function Calendar() {
  const [today, setToday] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
  }, []);

  <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center min-h-[300px]">
    <p className="text-gray-400 text-sm">Laddar kalender...</p>
  </div>

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  let startDayIndex = firstDayOfMonth.getDay() - 1;
  if (startDayIndex === -1) startDayIndex = 6;

  const calendarDays = [];

  for (let i = 0; i < startDayIndex; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(currentYear, currentMonth, day));
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 font-bold"
        >
          ‹
        </button>
        <h2 className="font-badeen text-2xl text-gray-800 tracking-wide">
          {MONTHS[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 font-bold"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 text-center">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day} className="text-xs font-semibold text-gray-400">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="h-10" />;
          }

          const isToday =
            today !== null &&
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

          return (
            <button
              key={date.toISOString()}
              className={`h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                isToday
                  ? 'bg-amber-500 text-white font-bold shadow-md shadow-amber-500/30'
                  : 'hover:bg-amber-50 text-gray-700'
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}