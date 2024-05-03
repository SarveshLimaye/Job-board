import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/jobsSlicer";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="container">
      {jobs.loading ? (
        <div>Loading...</div>
      ) : jobs.error ? (
        <div>Error: {jobs.error}</div>
      ) : jobs.data ? (
        <div className="jobs-grid">
          {jobs.data?.jdList.map((job) => (
            <div key={job.jdUid} className="job-item">
              <h2>{job.location}</h2>
              <p>{job.jobDetailsFromCompany}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
