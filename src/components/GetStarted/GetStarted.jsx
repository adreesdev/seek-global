import React from "react";
import { Box, Container, Typography } from "@mui/material";

function GetStarted() {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            borderBottom: "2px solid #F1620A",
            width: "260px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Russo One'",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "48px",
              lineHeight: "58px",
              color: "#F1620A",
            }}
          >
            SEEK
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Russo One'",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "48px",
              lineHeight: "58px",
            }}
          >
            GOLD
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "'Russo One'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: { sm: "40px", xs: "30px" },
            lineHeight: "58px",
          }}
        >
          Real Time BNB Dividends That Pay YOU Consistent Passive Income
        </Typography>
      </Container>
    </Box>
  );
}

export default GetStarted;
