import React  from "react";
import "./Forecast.css";

const Forecast = () => {
    

  return (
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Sun Sep 04</th>
          <th>Sun Sep 04</th>
          <th>Sun Sep 04</th>
          <th>Sun Sep 04</th>
          <th>Sun Sep 04</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Temperature</td>
          <td>Feels Like</td>
          <td>Pressure</td>
          <td>Condition</td>
          <td>Rain</td>
          <td>Humidity</td>
        </tr>
        <tr>
          <td>Feels Like</td>
          <td>25</td>
          <td>25</td>
          <td>25</td>
          <td>Accountant</td>
          <td>Accountant</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>Doctor</td>
        </tr>
        <tr>
          <td>Condition</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>Doctor</td>
        </tr>
        <tr>
          <td>Rain</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>Doctor</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>40</td>
          <td>Doctor</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Forecast;
