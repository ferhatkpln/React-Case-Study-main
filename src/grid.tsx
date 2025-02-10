import * as React from "react";

interface DataItem {
  name: string;
  mailReceivedDate: string;
  solutionSentDate?: string;
  isBackgroundColorRed?: boolean;
}

interface GridProps {
  source: DataItem[];
}

const Grid: React.FC<GridProps> = ({ source }) => {
  return (
    <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse", border: "1px solid black" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Mail Received Date</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Solution Sent Date</th>
        </tr>
      </thead>
      <tbody>
        {source.map((item, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: item.isBackgroundColorRed ? "red" : "white",
            }}
          >
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.name}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.mailReceivedDate}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.solutionSentDate || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
