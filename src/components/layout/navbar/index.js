import React from "react";
import "../../styles_global.scss";
import "./styles.scss";

export default function Navbar(props) {
	return (
		<div className="navbar-wrapper" style={{ width: props.width }}>
			<div className="navbar-item-list">
				<div className="navbar-item">HOME</div>
				<div className="navbar-item">WHITEPAPER</div>
				<div className="navbar-item">Reservation Event</div>
				<div className="navbar-item">SHOP</div>
			</div>
			<div className="text-gradient text-showcase">BASEL SHOWCASE</div>
		</div>
	);
}
