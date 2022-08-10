import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  // le useEffect se joue quand le composant est appele
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul>
        {data.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
