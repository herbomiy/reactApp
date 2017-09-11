import React, {Component} from "react"

import { Router, Route, Link, Switch} from "react-router-dom"

export default class App extends Component {
	render() {
		let childs = React.Children.toArray(this.props.children);
		return (
			<div>
				<h1>reactApp</h1>
				<ul>
					<li><Link to='/welcome'>Welcome</Link></li>
					<li><Link to='/counter'>counter</Link></li>
					<li><Link to="/demo">Demo</Link></li>
				</ul>
			</div>
		)
	}
}

