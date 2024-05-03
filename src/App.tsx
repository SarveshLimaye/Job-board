import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/jobsSlicer";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log(jobs);

  return (
    <>
      <h3>Welcome to jobs board </h3>
    </>
  );
}

export default App;
