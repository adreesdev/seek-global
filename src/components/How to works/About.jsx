import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import about from "../../assets/about.png";

const About = () => {
  return (
    <>
      <Box py={5} bgcolor="#202A80">
        <Container>
          <Grid container spacing={5} alignItems="flex-start">
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    width: "182px",
                    height: "2px",
                    bgcolor: "#F1620A",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Russo One'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { sm: "40px", xs: "33px" },
                    lineHeight: "58px",
                  }}
                >
                  Smart Members will hold their credits in the system for as
                  long as possible to benefit from the following
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Open Sans'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "22px",
                    textAlign: "justify",
                  }}
                >
                  <ol>
                    <li>
                      Appreciation in value of their credits. As activity
                      happens the sell credit price will fast become MORE than
                      the buy price a person paid for the credits.This can allow
                      users to multiply their credits by 2, 3 or even 100X or
                      more!
                    </li>
                    <br />
                    <li>
                      As mebers hold their funds in the contract they still
                      benefit from the increase in value of BNB. As BNB goes up
                      in price so does the value of all the credits they have in
                      the system when they exchange credits back to BNB
                    </li>
                    <br />
                    <li>
                      Consistent Real Time Dividends that will accumulate and
                      can be withdrawn at anytime! This can provide an increase
                      in value of zero to 3% or more per day 7 days per week
                      asactivity happens in the smart contract day after day
                      year after year!
                    </li>
                  </ol>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
