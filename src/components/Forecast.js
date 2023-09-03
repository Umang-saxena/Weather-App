
import React from "react";
import "./Forecast.css";

const Forecast = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Occupation</th>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>30</td>
        <td>Software Engineer</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>25</td>
        <td>Accountant</td>
      </tr>
      <tr>
        <td>Bill Jones</td>
        <td>40</td>
        <td>Doctor</td>
      </tr>
    </table>
  );
};

export default Forecast;