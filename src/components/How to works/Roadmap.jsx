import { Box, Container, Typography } from "@mui/material";
import React from "react";
import roadmapring from "../../assets/roadmapring.png";
import roadmapringsm from "../../assets/roadmapringsm.png";
import roadmapringalt from "../../assets/roadmapringalt.png";
import roadmapringsmalt from "../../assets/roadmapringsmalt.png";
import roadmappoint from "../../assets/roadmappoint.png";

const Roadmap = () => {
	return (
		<>
			<Box py={5}>
				<Container>
					<Box
						sx={{
							pt: 5,
							px: 2,
						}}
					>
						{/* spacing left border */}
						<Box
							sx={{
								height: "70px",
								borderLeft: "2px solid #000",
								// ml: "12px",
								position: "relative",
							}}
						>
							<img
								src={roadmappoint}
								alt=""
								style={{
									width: "50px",
									position: "absolute",
									left: "-26px",
									top: "-15px",
								}}
							/>
						</Box>
						{/* box1 */}
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Box
								sx={{
									display: { sm: "block", xs: "none" },
								}}
							>
								<img
									src={roadmapring}
									alt=""
									style={{
										width: "140px",
										position: "absolute",
										left: "0px",
										top: "10px",
									}}
								/>
							</Box>
							<Box
								sx={{
									display: { sm: "none", xs: "block" },
								}}
							>
								<img
									src={roadmapringsm}
									alt=""
									style={{
										width: "100px",
										position: "absolute",
										left: "0px",
										top: "10px",
									}}
								/>
							</Box>
							<Box
								pl={{ sm: 8, xs: 5 }}
								pb={5}
								pt={1}
								sx={{
									borderLeft: "2px solid #000",
									borderBottom: "2px solid #000",
								}}
							>
								<Box
									sx={{
										background: "#010524",
										width: "100%",
										maxWidth: "600px",
										height: "55px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										pr: { sm: 5, xs: 2 },
										pl: 5,
									}}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: { sm: "24px", xs: "16px" },
											color: "#F1620A",
										}}
									>
										Real Time Dividends
									</Typography>
								</Box>

								<Box
									sx={{
										width: "100%",
										background: "#01052470",
										px: { sm: 5, xs: 2 },
										py: 3,
										mt: 2,
									}}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "400",
											lineHeight: "22px",
											fontSize: { sm: "16px", xs: "14px" },
											textAlign: "justify",
										}}
									>
										You get paid real time dividends when depositors buy and
										sell Seek Gold. The fee to buy Seek Gold is 25%. The fee is
										distributed in the following manner, 10% is distributed
										immediately to all Seek Gold Holders including you, 10% is
										paid in commission to the two upline referrers and 5% is the
										admin fee. When you sell your seek gold credits 7% is
										released to all Seek Gold Holders as well.
									</Typography>
								</Box>
							</Box>
						</Box>
						{/* spacing right border */}
						<Box
							sx={{
								height: "50px",
								borderRight: "2px solid #000",
							}}
						></Box>
						{/* box2 */}
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Box
								sx={{
									display: { sm: "block", xs: "none" },
								}}
							>
								<img
									src={roadmapringalt}
									alt=""
									style={{
										width: "140px",
										position: "absolute",
										right: "0px",
										top: "5px",
										zIndex: 1,
									}}
								/>
							</Box>
							<Box
								sx={{
									display: { sm: "none", xs: "block" },
								}}
							>
								<img
									src={roadmapringsmalt}
									alt=""
									style={{
										width: "100px",
										position: "absolute",
										right: "0px",
										top: "5px",
										zIndex: 1,
									}}
								/>
							</Box>
							<Box
								pr={{ sm: 8, xs: 5 }}
								pb={5}
								sx={{
									borderRight: "2px solid #000",
									borderBottom: "2px solid #000",
									display: "flex",
									flexDirection: "column",
									alignItems: "end",
								}}
							>
								<Box
									sx={{
										background: "#010524",
										backdropFilter: "blur(10.5px)",
										width: "100%",
										maxWidth: "650px",
										height: "55px",
										display: "flex",
										alignItems: "center",
										pl: { sm: 5, xs: 2 },
										pr: 5,
									}}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: { sm: "24px", xs: "16px" },
											color: "#F1620A",
										}}
									>
										How Much Can I Earn by Depositing BNB?
									</Typography>
								</Box>

								<Box
									sx={{
										width: "100%",
										background: "#01052470",
										px: { sm: 5, xs: 2 },
										py: 3,
										mt: 2,
									}}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "400",
											lineHeight: "22px",
											fontSize: { sm: "16px", xs: "14px" },
											textAlign: "justify",
										}}
									>
										You can earn BNB passively in three ways. 1) When people buy
										and sell Seek Gold YOU earn dividends in real time. 2) As
										the volume of people buying and selling increases the price
										to buy and sell Seek Gold will also rise. By monitoring the
										price periodically you can pick the perfect time to sell at
										a price h igher than you purchased for to receive increased
										profits! 3) As the price of BNB Rises so does the value of
										your Seek Gold! You get to benefit from all the appreciation
										of BNB on top of the other two profit streams. Most
										important is you ALWAYS retain instant access to all of your
										BNB at anytime at!
									</Typography>
								</Box>
							</Box>
						</Box>
						{/* spacing left border */}
						<Box
							sx={{
								height: "50px",
								borderLeft: "2px solid #000",
							}}
						></Box>
						{/* box3 */}
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Box
								sx={{
									display: { sm: "block", xs: "none" },
								}}
							>
								<img
									src={roadmapring}
									alt=""
									style={{
										width: "140px",
										position: "absolute",
										left: "0px",
										top: "10px",
									}}
								/>
							</Box>
							<Box
								sx={{
									display: { sm: "none", xs: "block" },
								}}
							>
								<img
									src={roadmapringsm}
									alt=""
									style={{
										width: "100px",
										position: "absolute",
										left: "0px",
										top: "10px",
									}}
								/>
							</Box>
							<Box
								pl={{ sm: 8, xs: 5 }}
								pb={5}
								pt={1}
								sx={{
									borderLeft: "2px solid #000",
									borderBottom: "2px solid #000",
								}}
							>
								<Box
									sx={{
										background: "#010524",
										width: "100%",
										maxWidth: "600px",
										height: "55px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										pr: { sm: 5, xs: 2 },
										pl: 5,
									}}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "700",
											fontSize: { sm: "24px", xs: "16px" },
											color: "#F1620A",
										}}
									>
										Is my BNB Safe?
									</Typography>
								</Box>

								<Box
									sx={{
										width: "100%",
										background: "#01052470",
										px: { sm: 5, xs: 2 },
										py: 3,
										mt: 2,
									}}
								>
									<Typography
										sx={{
											fontFamily: "'Open Sans'",
											fontStyle: "normal",
											fontWeight: "400",
											lineHeight: "22px",
											fontSize: { sm: "16px", xs: "14px" },
											textAlign: "justify",
										}}
									>
										Your BNB is as safe as it would be in your own crypto wallet
										because it is literally on the blockchain. Not only can you
										withdraw your dividends at anytime you also have the
										opportunity to redeposit your dividends for future growth.
										Your funds are never locked up, you can withdraw dividends
										and can cash out all or part of your Seek Gold at any time.
										With Seek Gold YOU are in 100% control over your BNB at all
										times!
									</Typography>
								</Box>
							</Box>
						</Box>
						{/* spacing right border */}
						<Box
							sx={{
								height: "90px",
								borderRight: "2px solid #000",
								position: "relative",
							}}
						>
							<img
								src={roadmappoint}
								alt=""
								style={{
									width: "50px",
									position: "absolute",
									right: "-26px",
									bottom: "-15px",
								}}
							/>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Roadmap;
