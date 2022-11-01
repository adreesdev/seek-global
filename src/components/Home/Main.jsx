import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import mainbg from "../../assets/mainbg.png";

const Main = () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${mainbg})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center center",
					backgroundSize: "cover",
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
									color: "#F1620A",
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
							To YOUR BNB Anytime You wish!
						</Typography>
						<Button
							sx={{
								fontFamily: "'Open Sans'",
								fontStyle: "normal",
								fontWeight: "600",
								fontSize: "20px",
								background: "#F1620A",
								color: "#fff",
								width: "190px",
								height: "50px",
								borderRadius: "30px",
							}}
						>
							Enter Now
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Main;
