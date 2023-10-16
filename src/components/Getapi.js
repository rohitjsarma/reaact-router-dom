import React, { useState } from 'react';
import axios from 'axios';

const Getapi = () => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false); 

  const fetchDataOnClick = () => {
    setFetching(true); 
    const url =
      'https://gist.githubusercontent.com/rohitjsarma/e63256a6a3e0bf74991406bac7c26308/raw/18a583c2ddd38f445c57431f6332e1f7fe48cf27/jobTypeDetail';
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFetching(false); 
      });
  };

  return (
    <div>
      <h1>Getapi</h1>
      <button className='btn btn-sm btn-primary ' onClick={fetchDataOnClick} disabled={fetching}>
        {fetching ? 'Fetching...' : 'Fetch Data'}
      </button> <br/>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>JOB TYPE</th>
            <th>NO OF TASK</th>
            <th>TTR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.sno}</td>
              <td>{item.jobtype}</td>
              <td>{item.nooftask}</td>
              <td>{item.ttr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Getapi;
