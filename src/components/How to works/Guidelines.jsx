import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import about from "../../assets/about.png";

const Guideline = () => {
  return (
    <>
      <Box py={5}>
        <Container>
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
                pt: 2,
              }}
            >
              <ul>
                <li>
                  Users join the community by purchasing platform credits called
                  "Seek Gold".There is a buy price and a sell price for Seek
                  Gold that fluctuates based upon activity of community members.
                </li>
                <br />
                <li>
                  There is a 10% fee debited when users purchase Seek Gold.These
                  fees are distributed to all Seek Coin Holders as dividends
                  upon each purchase, INCLUDING the person who made the
                  purchase!
                </li>
                <br />
                <li>
                  There is a 7% fee when people sell Seek Gold Credits. This fee
                  is also split and sent as dividends to all Seek Gold Credit
                  Holders.
                </li>
                <br />
                <li>
                  Users can SELL all or a portion of their credits anytime they
                  choose.After they sell they can instantly withdraw to their
                  Metamask Walletand the funds are deposited at the real time
                  BNB value of their credits instantly!
                </li>
              </ul>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Guideline;
