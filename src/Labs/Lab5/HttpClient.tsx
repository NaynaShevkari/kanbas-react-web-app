import * as client from "./client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcomeOnClick = async () => {
    // const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    // setWelcomeOnClick(response.data);

    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);

  };

//   const fetchWelcomeOnLoad = async () => {
//     const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
//     setWelcomeOnLoad(response.data);
//   };

//   useEffect(() => {
//     fetchWelcomeOnLoad();
//   }, []);

const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div>
      <h3>HTTP Client</h3> <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button> <br />
      Response from server: <b>{welcomeOnClick}</b><br />

      Response from server on load: <b>{welcomeOnLoad}</b><br />
    </div>
  );
}
