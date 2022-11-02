import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Fees = () => {
  return (
    <>
      <Box py={10}>
        <Container>
          <Grid
            container
            spacing={5}
            alignItems="flex-end"
            flexWrap="wrap-reverse"
          >
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
                  <ul>
                    <li>
                      When you refer a new member and they buy credits you are
                      rewarded with a 7% instant commission! This fee is a
                      reward from the platform and does NOT come from the users
                      purchase!
                    </li>
                    <br />
                    <li>
                      When someone you refer refers someone this is considered
                      an indirect commission. The person who made the referral
                      gets paid 7% commission and YOU get paid a 3% indirect
                      commission!
                    </li>
                    <br />
                    <li>
                      Commissions can be withdrawn instantly and there is NO Fee
                      charged on commission withdraws!
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  // border: "1px solid red",
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
                    fontSize: { sm: "38px", xs: "33px" },
                    lineHeight: "58px",
                  }}
                >
                  Dividends can be withdrawn anytime with NO FEES!
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "35px",
              lineHeight: "58px",
              color: "#F1620A",
              textAlign: "center",
            }}
          >
            There are no additional fees with the Seek Gold Smart Contract other
            than a 5% admin/developer fee on deposits.{" "}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Fees;
