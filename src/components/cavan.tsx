import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourState, minuteState } from "../atoms";

function Cavan() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourState);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onChange}
        placeholder="minites"
        type="number"
      />
      <input
        value={hours}
        onChange={onHourChange}
        placeholder="hours"
        type="number"
      />
    </div>
  );
}

export default Cavan;
