// @ts-nocheck comment\
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { grey } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function JobCard({
  companyName,
  location,
  minExp,
  minJdSalary,
  maxJdSalary,
  jobDetailsFromCompany,
  jobRole,
  logoUrl,
  jdLink,
}) {
  const [showFullDetails, setShowFullDetails] = React.useState(false);

  const toggleDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "20px", boxShadow: 2, minHeight: 640 }}
      >
        <React.Fragment>
          <CardHeader
            avatar={<Avatar aria-label="recipe" src={logoUrl} />}
            title={
              <>
                <Typography
                  sx={{ fontSize: 14, mb: "2px", mt: 2, fontWeight: 700 }}
                  color={grey[500]}
                  gutterBottom
                >
                  {companyName}
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{ fontSize: 15, fontWeight: 100 }}
                >
                  {jobRole.charAt(0).toUpperCase() + jobRole.slice(1)} Engineer
                </Typography>
              </>
            }
            subheader={
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontSize: 13, mt: 1 }}
              >
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </Typography>
            }
          />
          <Typography sx={{ ml: 3, fontWeight: 200 }} color={grey[600]}>
            Estimated Salary : ₹ {minJdSalary === null ? "N/A" : minJdSalary} -{" "}
            {maxJdSalary === null ? "N/A" : maxJdSalary} LPA ✅
          </Typography>
          <CardContent>
            <Typography
              sx={{ fontWeight: 500, fontSize: 17 }}
              color={grey[900]}
            >
              About Company :
            </Typography>
            <Typography
              sx={{ fontWeight: 700, fontSize: 14 }}
              color={grey[900]}
            >
              About us
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {showFullDetails
                ? jobDetailsFromCompany
                : jobDetailsFromCompany.slice(0, 400)}
              {jobDetailsFromCompany.length > 400 && (
                <div style={{ textAlign: "center" }}>
                  <Button onClick={toggleDetails}>
                    {showFullDetails ? "View Less" : "View More"}
                  </Button>
                </div>
              )}
            </Typography>
          </CardContent>
          {minExp !== null ? (
            <div>
              <Typography
                sx={{ fontSize: 16, ml: 2, fontWeight: 400 }}
                color={grey[700]}
                gutterBottom
              >
                Minimum Experience
                <br />
                <span
                  style={{ fontSize: 14, fontWeight: 700, color: "#5C5470" }}
                >
                  {minExp} years
                </span>
              </Typography>{" "}
            </div>
          ) : null}
          <Button
            variant="contained"
            style={{ color: "black", backgroundColor: "#1de9b6" }}
            sx={{
              ml: 3,
              mb: 2,
              mt: 1,
              width: "80%",
              pt: 1,
              pb: 1,
              borderRadius: "5px",
            }}
          >
            <a
              href={jdLink}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 530,
                fontSize: "15px",
              }}
            >
              ⚡ Easy Apply
            </a>
          </Button>
        </React.Fragment>
      </Card>
    </Box>
  );
}
