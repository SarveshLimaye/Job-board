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

  return (
    <Box style={containerStyle}>
      <FormControl>
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
        <Input
          style={inputStyle}
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Location"
        />
      </FormControl>

      <FormControl style={{ flex: "1" }}>
        <InputLabel>Remote/On-site</InputLabel>
        <Select
          name="remoteOnSite"
          value={filters.remoteOnSite}
          onChange={handleFilterChange}
          sx={{
            "@media (max-width: 960px)": {
              flex: "1 1 auto",
              width: "100%",
              // Adjusted minWidth for tablet-sized devices
            },
            "@media (max-width: 600px)": {
              flex: "1 1 auto",
              width: "100%", // Adjusted minWidth for mobile-sized devices
            },
          }}
        >
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="On-site">On-site</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Input
          style={inputStyle}
          type="text"
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          placeholder="Role"
        />
      </FormControl>

      <FormControl style={{ flex: "1" }}>
        <InputLabel>Min Base Pay</InputLabel>
        <Select
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleFilterChange}
          labelId="minBasePay-label"
          id="minBasePay"
          sx={{
            "@media (max-width: 960px)": {
              flex: "1 1 auto",
              width: "100%",
              // Adjusted minWidth for tablet-sized devices
            },
            "@media (max-width: 600px)": {
              flex: "1 1 auto",
              width: "100%", // Adjusted minWidth for mobile-sized devices
            },
          }}
        >
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
            <MenuItem key={value} value={value}>
              {`${value}L`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl style={{ flex: "1" }}>
        <InputLabel>Minimum Experience</InputLabel>
        <Select
          name="minExp"
          value={filters.minExp}
          onChange={handleFilterChange}
          sx={{
            "@media (max-width: 960px)": {
              flex: "1 1 auto",
              width: "100%",
              // Adjusted minWidth for tablet-sized devices
            },
            "@media (max-width: 600px)": {
              flex: "1 1 auto",
              width: "100%", // Adjusted minWidth for mobile-sized devices
            },
          }}
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
