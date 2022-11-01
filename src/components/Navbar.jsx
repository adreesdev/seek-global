import React, { useState } from "react";
import { Box, Container, Hidden, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Paper } from "@mui/material";
import mainlogo from "../../src/assets/mainlogo.png";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const address = "0x0fc285505Ab1fEB288D1c7Ca59f40b85C1FfA6Fb";

const useStyles = makeStyles({
	list: {
		width: 250,
		paddingTop: "70px",
	},
	fullList: {
		width: "auto",
		alignItems: "center",
	},
	paper: {
		background: "#000616 !important",
		justifyContent: "space-between",
	},
	hover: {
		"&:hover": {
			color: "#F1620A",
		},
	},
});

function Navbar() {
	const classes = useStyles();
	const [state, setState] = useState(false);

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};
	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Box mb={5} display="flex" justifyContent="center">
				<img src={mainlogo} width="250px" alt="" />
			</Box>
			<List>
				{[
					{
						lable: "How it works",
					},
					{
						lable: "How to get Started",
					},
				].map((data, index) => (
					<ListItem
						button
						style={{
							justifyContent: "center",
						}}
						key={index}
					>
						<ListItemText
							className={classes.hover}
							style={{
								textTransform: "capitalize",
								textAlign: "center",
								textDecoration: "none",
								cursor: "pointer",
								color: "#ffffff",
								fontSize: "15px",
								fontWeight: 600,
							}}
							primary={data.lable}
						/>
					</ListItem>
				))}
			</List>
			<Box mt={5} display="flex" justifyContent="center">
				{address ? (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Box
							className={classes.hover}
							fontWeight={400}
							fontSize="18px"
							sx={{
								cursor: "pointer",
							}}
							mr={2}
						>
							{address.slice(0, 5) + "..." + address.slice(-5)}
						</Box>
						<IconButton className={classes.hover}>
							<ContentCopyIcon />
						</IconButton>
					</Box>
				) : (
					<Box
						className={classes.hover}
						fontWeight={400}
						fontSize="18px"
						sx={{
							cursor: "pointer",
						}}
					>
						Connect
					</Box>
				)}
			</Box>
		</div>
	);

	return (
		<Box position="relative">
			<Box
				bgcolor="#000616"
				height="100px"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Container maxWidth="lg">
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							flexBasis={{ md: "40%", sm: "80%", xs: "80%" }}
						>
							<img src={mainlogo} width="230px" alt="" />
						</Box>

						<Box display={{ xs: "none", sm: "block" }}>
							<Hidden mdDown>
								<Box
									display="flex"
									justifyContent="space-evenly"
									alignItems="center"
								>
									<Box
										className={classes.hover}
										fontWeight={400}
										fontSize="18px"
										sx={{
											cursor: "pointer",
										}}
										mr={5}
									>
										How it works
									</Box>
									<Box
										className={classes.hover}
										fontWeight={400}
										fontSize="18px"
										sx={{
											cursor: "pointer",
										}}
										mr={5}
									>
										How to get Started
									</Box>

									{address ? (
										<>
											<Box
												className={classes.hover}
												fontWeight={400}
												fontSize="18px"
												sx={{
													cursor: "pointer",
												}}
												mr={2}
											>
												{address.slice(0, 5) + "..." + address.slice(-5)}
											</Box>
											<IconButton className={classes.hover}>
												<ContentCopyIcon />
											</IconButton>
										</>
									) : (
										<Box
											className={classes.hover}
											fontWeight={400}
											fontSize="18px"
											sx={{
												cursor: "pointer",
											}}
											mr={5}
										>
											Connect
										</Box>
									)}
								</Box>
							</Hidden>
						</Box>
						<Hidden mdUp>
							{["left"].map((anchor) => (
								<React.Fragment key={anchor}>
									<IconButton onClick={toggleDrawer(anchor, true)}>
										<MenuIcon
											style={{
												fontSize: "38px",
												cursor: "pointer",
												color: "#fff",
											}}
										/>
									</IconButton>
									<Paper>
										<SwipeableDrawer
											classes={{ paper: classes.paper }}
											anchor={anchor}
											open={state[anchor]}
											onClose={toggleDrawer(anchor, false)}
											onOpen={toggleDrawer(anchor, true)}
										>
											{list(anchor)}
										</SwipeableDrawer>
									</Paper>
								</React.Fragment>
							))}
						</Hidden>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}

export default Navbar;
