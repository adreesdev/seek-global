import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Refferal/Main";

function App() {
	return (
		<Box>
			<ToastContainer />
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/refferal" element={<Main />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</Box>
	);
}

export default App;
