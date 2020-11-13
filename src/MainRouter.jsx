import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/functional/Header"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Header} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
