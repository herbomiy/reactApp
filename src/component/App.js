import React, {Component} from "react"

import { Router, Route, Link, Switch} from "react-router-dom"

import Counter from 'component/Counter'
import Welcome from 'component/Welcome'
import Demo from 'component/Demo'

// import {Counter, Welcome, Demo} from 'component/Counter'

export default class App extends Component {
	render() {
		console.log('this.props App = ', this.props)
		let childs = React.Children.toArray(this.props.children);
		return (
			<div>
				<h1>reactApp</h1>
				<ul>
					<li><Link to='/welcome'>Welcome</Link></li>
					<li><Link to='/counter'>counter</Link></li>
					<li><Link to="/demo">Demo</Link></li>
				</ul>
				<Route path="welcome">

				</Route>
			</div>
		)
	}
}

