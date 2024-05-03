import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function JobCard({
  companyName,
  location,
  minExp,
  jobDetailsFromCompany,
  jobRole,
  jdLink,
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {jobRole} {location && `(${location})`}
            </Typography>
            <Typography variant="h5" component="div">
              {companyName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {jobDetailsFromCompany}
            </Typography>
            <Typography variant="body2">{minExp}</Typography>
          </CardContent>
          <CardActions>
            <a href={jdLink}>
              <Button size="small">Easy Apply</Button>
            </a>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
