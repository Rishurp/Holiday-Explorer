import React, { useState } from "react";
import "./App.css";
import { fetchHolidays } from "./api/holidayApi";
import HolidayForm from "./components/HolidayForm";
import { Holiday } from "./types/Holiday";
import HolidayList from "./components/HolidayList";

const App: React.FC = () => {
  const [holidayData, setHolidayData] = useState<Holiday[]>([]);
  const [error, setError] = useState<string | null>(null);

  let handleHolidaySearch = async (countryName: string): Promise<void> => {
    try {
      setError(null);
      let response = await fetchHolidays(countryName);
      setHolidayData(response);
    } catch (error) {
      setError("Failed to fetch holidays");
    }
  };
  console.log(holidayData);
  return (
    <div>
      <h1>Public Holiday Explorer</h1>
      <HolidayForm onSearch={handleHolidaySearch} />
      {error && <p>{error}</p>}
      <HolidayList holidays={holidayData} />
    </div>
  );
};

export default App;
