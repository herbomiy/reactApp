import React, {Component} from "react"
import {Router as BrowserRouter, HashRouter, Route, Link, Switch, Redirect} from "react-router-dom"

import {Provider} from "react-redux"
import store from "store"

import createBrowserHistory from 'history/createBrowserHistory'
const browserHistory = createBrowserHistory()


import routes from "./routes"

class ROOT extends Component {
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}

let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

const RouteConfig = (
	<Provider store={ store }>
		<Router history={browserHistory}>
			<Switch>
				{
					routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))
				}
				<Redirect from='' to=''/>
			</Switch>
		</Router>
	</Provider>

)

export default RouteConfig;