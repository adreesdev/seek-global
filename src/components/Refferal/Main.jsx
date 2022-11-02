import {
	Box,
	Button,
	Container,
	Grid,
	InputBase,
	Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import React from "react";
import ethicon from "../../assets/ethicon.png";
const Main = () => {
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
							background: "#010524",
							borderRadius: "10px",
							width: "100%",
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
							py: 8,
							px: { sm: 8, xs: 3 },
						}}
					>
						<Typography
							sx={{
								fontFamily: "'Roboto'",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: { sm: "24px", xs: "20px" },
								lineHeight: "28px",
								textAlign: "center",
							}}
						>
							Share Your Refferral Link And Get Paid 7% From Your Refferral
							Purchase And 3% From Their Referrals Purchase
						</Typography>
						<Box
							sx={{
								fontFamily: "'Open Sans'",
								fontStyle: "normal",
								fontWeight: "600",
								fontSize: "32px",
								lineHeight: "44px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "50px",
								background: "rgba(32, 42, 128, 0.4)",
								borderRadius: "30px",
								border: "1px solid rgba(32, 42, 128, 1)",
							}}
							px={2}
							mt={5}
						>
							<InputBase
								sx={{
									width: "100%",
									px: 2,
								}}
								placeholder="https://seekgold.osiztechnologies.in/en/refer/"
							/>
							<ContentCopyIcon />
						</Box>
					</Box>
					<Box py={5}>
						<Grid container spacing={5}>
							<Grid item xs={12} sm={12} md={6} lg={4}>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										background: "#010524",
										borderRadius: "10px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
									py={4}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "36px",
											lineHeight: "49px",
											color: "#F1620A",
										}}
									>
										$ 0.00
									</Typography>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "24px",
											lineHeight: "33px",
										}}
										mt={3}
									>
										0.00 BNB
									</Typography>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: "16px",
											lineHeight: "22px",
											color: "#5865F2",
										}}
										pt={1}
									>
										TOTAL CLIENTS CAPITAL
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={4}>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										background: "#010524",
										borderRadius: "10px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
									py={4}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "36px",
											lineHeight: "49px",
											color: "#F1620A",
										}}
									>
										0
									</Typography>
									<Box mt={3} display="flex">
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "24px",
												lineHeight: "33px",
												color: "#F1620A",
											}}
										>
											SEEK
										</Typography>
										&nbsp;
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "24px",
												lineHeight: "33px",
											}}
										>
											GOLD Credits
										</Typography>
									</Box>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: "16px",
											lineHeight: "22px",
											color: "#5865F2",
										}}
										pt={1}
									>
										Total Seek Gold Credits Value
									</Typography>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "space-between",
										}}
										px={4}
										py={1}
										mt={4}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "24px",
												lineHeight: "33px",
											}}
										>
											BNB
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "24px",
												lineHeight: "33px",
											}}
										>
											0.00
										</Typography>
									</Box>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "space-between",
										}}
										px={4}
										py={1}
										mt={1}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "24px",
												lineHeight: "33px",
											}}
										>
											BNB
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "24px",
												lineHeight: "33px",
											}}
										>
											0.00
										</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={4}>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										background: "#010524",
										borderRadius: "10px",
									}}
									p={1}
								>
									<Box
										sx={{
											width: "100%",
											height: "auto",
											background: "#060C3B",
											borderRadius: "10px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											flexDirection: "column",
										}}
										py={2}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "32px",
												lineHeight: "44px",
												color: "#F1620A",
											}}
										>
											$ 0.00
										</Typography>

										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "700",
												fontSize: "16px",
												lineHeight: "22px",
												color: "#5865F2",
											}}
											mt={3}
										>
											Your Dividend Earnings
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "20px",
												lineHeight: "27px",
											}}
											my={1}
										>
											0.000000 BNB
										</Typography>
										<Button
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "12px",
												lineHeight: "16px",
												background: "#F1620A",
												color: "#fff",
												borderRadius: "25px",
												px: 2,
												py: 1,
											}}
										>
											Withdraw Dividend
										</Button>
									</Box>
									<Box
										sx={{
											width: "100%",
											height: "auto",
											background: "#060C3B",
											borderRadius: "10px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											flexDirection: "column",
										}}
										py={2}
										mt={1}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "32px",
												lineHeight: "44px",
												color: "#F1620A",
											}}
										>
											$ 0.00
										</Typography>

										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "700",
												fontSize: "16px",
												lineHeight: "22px",
												color: "#5865F2",
											}}
											mt={3}
										>
											Your Refferal Earnings
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "20px",
												lineHeight: "27px",
											}}
											my={1}
										>
											0.000000 BNB
										</Typography>
										<Button
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "12px",
												lineHeight: "16px",
												background: "#F1620A",
												color: "#fff",
												borderRadius: "25px",
												px: 2,
												py: 1,
											}}
										>
											Withdraw Referral
										</Button>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={4}>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										background: "#010524",
										borderRadius: "10px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
									py={4}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "24px",
											lineHeight: "33px",
										}}
										mb={1}
									>
										Buy Seek Gold Credits
									</Typography>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "16px",
											lineHeight: "22px",
										}}
									>
										(10% Dividend Distribution)
									</Typography>

									<Box
										sx={{
											border: "1px solid #202A80",
											borderRadius: "10px",
											width: "100%",
											maxWidth: "300px",
											display: "flex",
											alignItems: "center",
										}}
										px={1}
										mt={2}
									>
										<img
											src={ethicon}
											alt=""
											style={{
												padding: "5px",
											}}
										/>
										<InputBase
											placeholder="Amount of Seek Gold Credits"
											sx={{
												width: "100%",
												pl: 1,
											}}
										/>
									</Box>

									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "12px",
											lineHeight: "16px",
											color: "#5865F2",
										}}
										py={2}
									>
										You will get NaN number of tokens
									</Typography>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "space-between",
										}}
										px={4}
										py={1}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "16px",
												lineHeight: "33px",
											}}
										>
											BNB Buy Price
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "18px",
												lineHeight: "33px",
											}}
										>
											0.00055773
										</Typography>
									</Box>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "space-between",
										}}
										px={4}
										py={1}
										mt={1}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "16px",
												lineHeight: "33px",
											}}
										>
											$ Buy Price
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "18px",
												lineHeight: "33px",
											}}
										>
											0.00055773
										</Typography>
									</Box>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "16px",
											lineHeight: "22px",
											color: "#F1620A",
										}}
										py={1}
									>
										Minimum Purchase value is 0.1 BNB
									</Typography>
									<Button
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "27px",
											background: "#F1620A",
											color: "#fff",
											borderRadius: "25px",
											px: 2,
											py: 1,
										}}
									>
										BUY SEEK GOLD CREDITS
									</Button>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={4}>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										background: "#010524",
										borderRadius: "10px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
									py={4}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "24px",
											lineHeight: "33px",
										}}
										mb={1}
									>
										Sell Seek Gold Credits
									</Typography>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "16px",
											lineHeight: "22px",
										}}
									>
										(7% Dividend Distribution)
									</Typography>

									<Box
										sx={{
											border: "1px solid #202A80",
											borderRadius: "10px",
											width: "100%",
											maxWidth: "300px",
											display: "flex",
											alignItems: "center",
										}}
										px={1}
										mt={2}
									>
										<img
											src={ethicon}
											alt=""
											style={{
												padding: "5px",
											}}
										/>
										<InputBase
											placeholder="Amount of Seek Gold Credits"
											sx={{
												width: "100%",
												pl: 1,
											}}
										/>
									</Box>

									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "12px",
											lineHeight: "16px",
											color: "#5865F2",
										}}
										py={2}
									>
										You will get NaN amount of BNBs based on current price
									</Typography>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "space-between",
										}}
										px={4}
										py={1}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "16px",
												lineHeight: "33px",
											}}
										>
											BNB Sell Price
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "18px",
												lineHeight: "33px",
											}}
										>
											0.00055773
										</Typography>
									</Box>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "space-between",
										}}
										px={4}
										py={1}
										mt={1}
										mb={5}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "16px",
												lineHeight: "33px",
											}}
										>
											$ Sell Price
										</Typography>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "18px",
												lineHeight: "33px",
											}}
										>
											0.00055773
										</Typography>
									</Box>

									<Button
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "27px",
											background: "#F1620A",
											color: "#fff",
											borderRadius: "25px",
											px: 2,
											py: 1,
										}}
									>
										SELL SEEK GOLD CREDITS
									</Button>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={4}>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										background: "#010524",
										borderRadius: "10px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
									py={4}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "16px",
											lineHeight: "22px",
										}}
										py={2}
									>
										Personal balance in BNB
									</Typography>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "center",
										}}
										px={4}
										py={1}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "32px",
												lineHeight: "44px",
												color: "#F1620A",
											}}
										>
											$ 0.00
										</Typography>
									</Box>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "600",
											fontSize: "16px",
											lineHeight: "22px",
										}}
										py={2}
									>
										Personal balance in Dollar
									</Typography>
									<Box
										sx={{
											width: "100%",
											background: "#060C3B",
											display: "flex",
											justifyContent: "center",
										}}
										px={4}
										py={1}
										mt={1}
										mb={9}
									>
										<Typography
											sx={{
												fontFamily: "'Open Sans'",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "32px",
												lineHeight: "44px",
												color: "#F1620A",
											}}
										>
											$ 0.00
										</Typography>
									</Box>

									<Button
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "27px",
											background: "#F1620A",
											color: "#fff",
											borderRadius: "25px",
											px: 5,
											py: 1,
										}}
									>
										Withdraw
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Main;
