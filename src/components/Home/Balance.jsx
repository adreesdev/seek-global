import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Balance = () => {
	return (
		<>
			<Box py={5}>
				<Container>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
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
					<Box
						sx={{
							background: "#060C3B",
							borderRadius: "10px",
							width: "100%",
							maxWidth: "700px",
							display: "flex",
							justifyContent: "space-between",
							flexDirection: { sm: "row", xs: "column" },
						}}
					>
						<Typography
							sx={{
								fontFamily: "'Open Sans'",
								fontStyle: "normal",
								fontWeight: "600",
								fontSize: "16px",
								lineHeight: "22px",
							}}
						>
							Connected Wallet balance in BNB:
						</Typography>
						<Box
							sx={{
								fontFamily: "'Open Sans'",
								fontStyle: "normal",
								fontWeight: "600",
								fontSize: "32px",
								lineHeight: "44px",
								color: "#F1620A",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								maxWidth: "260px",
								height: "50px",
								background: "#5865F24A",
							}}
						>
							0.00
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Balance;
