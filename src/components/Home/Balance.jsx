import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Balance = () => {
	return (
		<>
			<Box pb={10}>
				<Container>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
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
								alignItems: "center",
								flexDirection: { sm: "row", xs: "column" },
								px: 5,
								py: 2,
								mt: 2,
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
						<Box
							sx={{
								background: "#060C3B",
								borderRadius: "10px",
								width: "100%",
								maxWidth: "700px",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								flexDirection: { sm: "row", xs: "column" },
								px: 5,
								py: 2,
								mt: 1,
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
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Balance;
