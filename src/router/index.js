import React, {Component} from "react"
import {Provider} from "react-redux"
import store from "store"
import {Router as BrowserRouter, HashRouter, Route, Link, Switch, Redirect} from "react-router-dom"

import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()


import routes from "./routes"

// 按需加载路由
import Bundle from './Bundle'

const Loading = function () {
	return <div className="txt-center">Loading...</div>
};

const createComponent = (component) => () => (
	<Bundle load={component}>
		{
			Component => Component ? <Component/> : <Loading/>
		}
	</Bundle>
);


class ROOT extends Component {
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}

let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
Router = HashRouter
const RouteConfig = (
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Switch>
				{
					routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={createComponent(route.component)}
						/>
					))
				}
				{/*<Redirect from='' to='/'/>*/}
			</Switch>
		</Router>
	</Provider>

)

export default RouteConfig;