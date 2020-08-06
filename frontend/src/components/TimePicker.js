import React, {useState} from 'react';
import TimeKeeper from 'react-timekeeper';

export default function TimePicker(){
  const [time, setTime] = useState('00:00am')

  return (
      <TimeKeeper
        time={time}
        onChange={(newTime) => setTime(newTime.formatted12)}
        switchToMinuteOnHourSelect
      />
  )
}