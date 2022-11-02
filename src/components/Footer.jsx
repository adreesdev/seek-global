import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/mainlogo.png";

const Footer = () => {
	return (
		<Box mb={{ sm: 2, xs: 5 }}>
			<Box
				sx={{
					background: "#000616",
					width: "100%",
					textAlign: "center",
				}}
			>
				<img src={logo} alt="" width="230px" />
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					my: 2,
				}}
			>
				<Typography
					sx={{
						fontFamily: "'Open Sans'",
						fontStyle: "normal",
						fontWeight: "400",
						fontSize: { sm: "16px", xs: "14px" },
						lineHeight: "22px",
					}}
				>
					Contract Adress:{" "}
				</Typography>
				&nbsp;
				<Typography
					sx={{
						fontFamily: "'Open Sans'",
						fontStyle: "normal",
						fontWeight: "400",
						fontSize: { sm: "16px", xs: "14px" },
						lineHeight: "22px",
						color: "#F1620A",
					}}
				>
					gdkasgdiugdiusagdjkgsakdgiuqwe76et789698
				</Typography>
			</Box>
			<Typography
				sx={{
					fontFamily: "'Open Sans'",
					fontStyle: "normal",
					fontWeight: "400",
					fontSize: { sm: "16px", xs: "14px" },
					lineHeight: "22px",
					textAlign: "center",
				}}
			>
				Copyright: SEEK GOLD 2021 All rights Reserved
			</Typography>
		</Box>
	);
};

export default Footer;
