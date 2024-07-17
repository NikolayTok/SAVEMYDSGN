import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../styles/globals.scss";

const Layout = ({ children }: any) => {
	return (
		<div className="layout">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
