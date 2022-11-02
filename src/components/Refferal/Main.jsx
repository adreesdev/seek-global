import { Box, Typography } from "@mui/material";
import React from "react";

const Main = () => {
	return (
		<>
			<Box py={5}>
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
			</Box>
		</>
	);
};

export default Main;
