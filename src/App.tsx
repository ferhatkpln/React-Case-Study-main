import * as React from "react";
import "./style.css";
import Grid from "./grid";
import dataList from "./data.json";

export default function App() {
  const [today, setToday] = React.useState<string>(new Date().toISOString().split("T")[0]);
  const [limit, setLimit] = React.useState<number>(30);
  const [filteredData, setFilteredData] = React.useState(dataList);

  function control(todayStr: string, limit: number) {
    const todayDate = new Date(todayStr);
    const updatedData = dataList.map((item) => {
      if (item.mailReceivedDate) {
        const receivedDate = new Date(item.mailReceivedDate);
        const dayDiff = (todayDate.getTime() - receivedDate.getTime()) / (1000 * 60 * 60 * 24);
        return {
          ...item,
          isBackgroundColorRed: dayDiff > limit, 
        };
      }
      return { ...item, isBackgroundColorRed: false }; 
    });

    setFilteredData(updatedData);
  }

  return (
    <div className="container">
      <h1>Dgpays Case Study</h1>

      {/* Tabloyu önce gösterelim */}
      <Grid source={filteredData} />

      {/* Input ve butonları içeren alan */}
      <div className="control-panel">
        <label>Bugünün Tarihi: </label>
        <input 
          type="date" 
          value={today} 
          onChange={(e) => setToday(e.target.value)}
        />

        <label>Limit (Gün): </label>
        <input 
          type="number" 
          value={limit} 
          onChange={(e) => setLimit(Number(e.target.value))}
        />

        <button onClick={() => control(today, limit)}>Kontrol Et</button>
      </div>
    </div>
  );
}
