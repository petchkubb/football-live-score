import React from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'

import Detail from 'pages/Detail'
import Home from 'pages/Home'

const Routers = () => (
	<Router>
		<Switch>
			<Route path="/" exact="true">
				<Home />
			</Route>
			<Route path="/detail" exact="true">
				<Detail />
			</Route>
		</Switch>
	</Router>
)

export default Routers
