// @ts-nocheck comment\
import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { fetchJobs } from "./redux/jobsSlicer";
import JobCard from "./components/JobCard/JobCard";
import Filters from "./components/Filters/Filters";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const [filters, setFilters] = useState({
    location: "",
    remoteOnSite: "",
    role: "",
    minBasePay: "",
    minExp: "",
    companyName: "", // New filter for company name
  });
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(fetchJobs({ limit, offset }));
  }, [dispatch, limit, offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setLimit((prevLimit) => prevLimit + 10);
        console.log("End of scroll"); // Increase limit to fetch more jobs
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredJobs = jobs.data
    ? jobs.data.jdList.filter((job) => {
        const {
          location,
          remoteOnSite,
          role,
          minBasePay,
          minExp,
          companyName,
        } = filters;
        return (
          (companyName === "" ||
            job.companyName
              .toLowerCase()
              .includes(companyName.toLowerCase())) &&
          (location === "" ||
            job.location.toLowerCase().includes(location.toLowerCase())) &&
          (remoteOnSite === "" ||
            (job.location === "remote" && remoteOnSite === "remote") ||
            (job.location !== "remote" && remoteOnSite === "On-site")) &&
          (role === "" ||
            job.jobRole.toLowerCase().includes(role.toLowerCase())) &&
          (minBasePay === "" || job.minJdSalary > minBasePay) &&
          (minExp === "" || job.minExp >= minExp)
        );
      })
    : [];

  return (
    <div>
      <Filters filters={filters} handleFilterChange={handleFilterChange} />
      <div className="container">
        {filteredJobs.length === 0 && !jobs.loading && (
          <div>No jobs found with the applied filters.</div>
        )}
        <div className="jobs-grid">
          {jobs.loading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
          {jobs.error && <div>Error: {jobs.error}</div>}
          {filteredJobs.map((job) => (
            <JobCard
              key={job.jdUid}
              companyName={job.companyName}
              logoUrl={job.logoUrl}
              location={job.location}
              minExp={job.minExp}
              minJdSalary={job.minJdSalary}
              maxJdSalary={job.maxJdSalary}
              jobDetailsFromCompany={job.jobDetailsFromCompany}
              jobRole={job.jobRole}
              jdLink={job.jdLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
