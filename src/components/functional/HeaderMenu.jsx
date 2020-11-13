import React from "react"

import "../../styles/header.css"

const HeaderMenu = () => {
	return (
		<div className="header-menu">
			<div className="menu">
				<HeaderMenu />
			</div>
			<div id="burger" className="burger">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</div>
	)
}

export default HeaderMenu
