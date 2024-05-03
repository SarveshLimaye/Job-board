import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/jobsSlicer";
import JobCard from "./components/JobCard/JobCard";

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

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

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
      <div>
        <input
          type="text"
          name="companyName" // Updated to include company name filter
          value={filters.companyName}
          onChange={handleFilterChange}
          placeholder="Company Name" // Added placeholder
        />

        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Location"
        />

        <select
          name="remoteOnSite"
          value={filters.remoteOnSite}
          onChange={handleFilterChange}
        >
          <option value="">Remote/On-site</option>
          <option value="remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>

        <input
          type="text"
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          placeholder="Role"
        />

        <select
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleFilterChange}
        >
          <option value="">Min Base Pay</option>
          <option value="10">{"10L"}</option>
          <option value="20">{"20L"}</option>
          <option value="30">{"30L"}</option>
          <option value="40">{"40L"}</option>
          <option value="50">{"50L"}</option>
          <option value="60">{"60L"}</option>
          <option value="70">{"70L"}</option>
          <option value="80">{"80L"}</option>
          <option value="90">{"90L"}</option>
          <option value="100">{"100L"}</option>
        </select>

        <select
          name="minExp"
          value={filters.minExp}
          onChange={handleFilterChange}
        >
          <option value="">Minimum Experience</option>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        {filteredJobs.length === 0 && (
          <div>No jobs found with the applied filters.</div>
        )}
        <div className="jobs-grid">
          {jobs.loading && <div>Loading...</div>}
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
