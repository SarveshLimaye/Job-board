// @ts-nocheck comment\
import React from "react";
import {
  Box,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Filters({ filters, handleFilterChange }) {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "16px",
    margin: "40px 20px",
  };

  const inputStyle = {
    color: "#757575",
    flex: "1 1 auto",
    maxWidth: "200px",
    width: "100%",
    border: "1px solid #bdbdbd",
    borderRadius: "4px",
    padding: "8px",
  };

  const labelStyle = {
    color: "#757575",
    marginBottom: "5px",
  };

  return (
    <Box style={containerStyle}>
      <FormControl>
        <InputLabel style={labelStyle}>Company Name</InputLabel>
        <Input
          style={inputStyle}
          type="text"
          name="companyName"
          value={filters.companyName}
          onChange={handleFilterChange}
          placeholder="Company Name"
        />
      </FormControl>

      <FormControl>
        <InputLabel style={labelStyle}>Location</InputLabel>
        <Input
          style={inputStyle}
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Location"
        />
      </FormControl>

      <FormControl style={{ flex: "1", minWidth: "160px" }} variant="standard">
        <InputLabel style={labelStyle}>Remote/On-site</InputLabel>
        <Select
          name="remoteOnSite"
          value={filters.remoteOnSite}
          onChange={handleFilterChange}
        >
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="On-site">On-site</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel style={labelStyle}>Role</InputLabel>
        <Input
          style={inputStyle}
          type="text"
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          placeholder="Role"
        />
      </FormControl>

      <FormControl style={{ flex: "1", minWidth: "160px" }} variant="standard">
        <InputLabel style={labelStyle}>Min Base Pay</InputLabel>
        <Select
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleFilterChange}
          labelId="minBasePay-label"
          id="minBasePay"
        >
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
            <MenuItem key={value} value={value}>
              {`${value}L`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl style={{ flex: "1", minWidth: "160px" }} variant="standard">
        <InputLabel style={labelStyle}>Minimum Experience</InputLabel>
        <Select
          name="minExp"
          value={filters.minExp}
          onChange={handleFilterChange}
        >
          {[...Array(10)].map((_, i) => (
            <MenuItem key={i} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
