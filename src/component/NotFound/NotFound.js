import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";

class NotFound extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{textAlign: 'center', fontSize: '1rem'}}>
				404
			</div>
		)
	}
}

export default withRouter(connect()(NotFound));