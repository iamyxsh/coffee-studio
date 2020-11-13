import React from "react"
import { Link } from "react-router-dom"

import "../../styles/header.css"

import logo from "../../assets/logo.svg"
import bag from "../../assets/shopping-bag.svg"
import HeaderMenu from "./HeaderMenu"

const Header = () => {
	const animateMenu = () => {
		const burger = document.getElementById("burger")
		burger.classList.toggle("toggle")
	}

	return (
		<header className="header container">
			<Link className="link" to="/">
				<img className="logo" src={logo} alt="logo" />
			</Link>
			<div className="menu">
				<div className="nav">
					<h1>MENU</h1>
					<div className="menu">
						<HeaderMenu />
					</div>
					<div id="burger" className="burger" onClick={() => animateMenu()}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
				</div>
				<img className="bag" src={bag} alt="bag" />
			</div>
		</header>
	)
}

export default Header
