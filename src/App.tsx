import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/jobsSlicer";
import JobCard from "./components/JobCard/JobCard";

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
            <JobCard
              key={job.jdUid}
              location={job.location}
              minExp={job.minExp}
              jobDetailsFromCompany={job.jobDetailsFromCompany}
              jobRole={job.jobRole}
              jdLink={job.jdLink}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
