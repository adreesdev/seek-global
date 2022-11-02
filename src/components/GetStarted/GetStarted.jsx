import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import first from "../../assets/1.png";
import secnd from "../../assets/2.png";
import third from "../../assets/3.png";
import forth from "../../assets/4.png";
import fifth from "../../assets/5.png";

function GetStarted() {
  return (
    <Box>
      <Container>
        <Box display="flex" justifyContent="center" my={3}>
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
            // lineHeight: "20px",
            textAlign: "center",
          }}
        >
          How To Get Started
        </Typography>
        <Grid container spacing={4} my={10}>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              flexDirection={"column"}
              sx={{
                backgroundColor: "#010524",
                borderRadius: "20px",
              }}
              px={5}
              py={5}
            >
              <img src={first} alt="" />
              <Box
                color="#F1620A"
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight={700}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Fund your Metamask Wallet
              </Box>
              <Box
                color="#FFFFFF"
                fontSize={{ xs: "14px", sm: "16px" }}
                fontWeight={400}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Add BNB to your wallet and make sure you leave enough extra to
                cover the transaction fees.
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              flexDirection={"column"}
              sx={{
                backgroundColor: "#010524",
                borderRadius: "20px",
              }}
              px={5}
              py={5}
            >
              <img src={secnd} alt="" />
              <Box
                color="#F1620A"
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight={700}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Unlock your wallet
              </Box>
              <Box
                color="#FFFFFF"
                fontSize={{ xs: "14px", sm: "16px" }}
                fontWeight={400}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Allow the smart contract to interact with your metamask wallet.
                When prompted click the connect button to connect your wallet to
                the smart contract.
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              flexDirection={"column"}
              sx={{
                backgroundColor: "#010524",
                borderRadius: "20px",
              }}
              px={5}
              py={5}
            >
              <img src={third} alt="" />
              <Box
                color="#F1620A"
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight={700}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                BUY Seek Gold Credits
              </Box>
              <Box
                color="#FFFFFF"
                fontSize={{ xs: "14px", sm: "16px" }}
                fontWeight={400}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Once your account is connected buy Seek Gold Credits to start
                earning real time dividends.
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              flexDirection={"column"}
              sx={{
                backgroundColor: "#010524",
                borderRadius: "20px",
              }}
              px={5}
              py={5}
            >
              <img src={forth} alt="" />
              <Box
                color="#F1620A"
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight={700}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Hold Seek Gold
              </Box>
              <Box
                color="#FFFFFF"
                fontSize={{ xs: "14px", sm: "16px" }}
                fontWeight={400}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Accumulate real time dividends and wait for the sell price to
                increase to more than your buy price. You can then sell some for
                profit and hold the rest to keep earning real time dividends
                consistently.
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              flexDirection={"column"}
              sx={{
                backgroundColor: "#010524",
                borderRadius: "20px",
              }}
              px={5}
              py={5}
            >
              <img src={fifth} alt="" />
              <Box
                color="#F1620A"
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight={700}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Share to Seek Gold
              </Box>
              <Box
                color="#FFFFFF"
                fontSize={{ xs: "14px", sm: "16px" }}
                fontWeight={400}
                fontFamily="Open Sans"
                textAlign={"center"}
                my={2}
              >
                Share the program with others using your referral link. You will
                receive 7% Instant Commission for direct referrals purchases and
                3% Indirect commission when they refer someone who makes a
                purchase! There are NO FEES when you withdraw referral
                commissions!
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default GetStarted;
