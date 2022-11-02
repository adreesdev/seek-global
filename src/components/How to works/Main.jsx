import { Box, Container, Typography } from "@mui/material";
import React from "react";
import mainbg from "../../assets/how-it-works-bg.png";

const Main = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${mainbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          pb: 5,
        }}
      >
        <Container>
          <Box
            sx={{
              py: 12,
              width: { md: "50%", sm: "80%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { sm: "start", xs: "center" },
              textAlign: { sm: "left", xs: "center" },
            }}
          >
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
              How To Works?
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Open Sans'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "22px",
              }}
              pt={2}
              pb={5}
            >
              Protected by the blockchain, Seek Gold allows you 24 Hour Access
              The Seek Gold Smart Contract is modeled after an proven smart
              contract code that has been in existence since 2017. The leading
              contracts based on this model have held and distributed millions
              of dollars to members across the globe and continue to do so to
              this day. The concept is simple.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Main;
