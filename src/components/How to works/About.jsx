import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import about from "../../assets/about.png";

const About = () => {
	return (
		<>
			<Box py={5}>
				<Container>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={12} md={6}>
							<img
								src={about}
								alt=""
								style={{
									width: "100%",
									filter: "drop-shadow(0px -40px 25px rgba(255,255,255,0.3))",
								}}
							/>
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
								<Box display="flex">
									<Typography
										sx={{
											fontFamily: "'Russo One'",
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: { sm: "48px", xs: "33px" },
											lineHeight: "58px",
										}}
									>
										What is
									</Typography>
									&nbsp;
									<Typography
										sx={{
											fontFamily: "'Russo One'",
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: { sm: "48px", xs: "33px" },
											lineHeight: "58px",
											color: "#F1620A",
										}}
									>
										SEEK
									</Typography>
									&nbsp;
									<Typography
										sx={{
											fontFamily: "'Russo One'",
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: { sm: "48px", xs: "33px" },
											lineHeight: "58px",
										}}
									>
										GOLD
									</Typography>
								</Box>
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
									Seek Gold is a global crowd funding and financial support
									ecosystem. The Immutable Smart Contract was developed to
									provide anyone across the globe a way to create a dependable,
									virtually no risk way to create passive income while retaining
									100% control over their BNB. We reward members who share the
									contract with others and the members who choose to simply
									collect dividends with no requirements whatsoever. We invite
									you to join us and start creating real time BNB Dividends
									TODAY!
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
