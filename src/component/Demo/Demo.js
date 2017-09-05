import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Demo extends Component {

	componentWillMount() {
		console.log('componentWillMount= ')
	}
	componentDidMount() {
		console.log('this.props = ', this.props)
		let {demoDelAsync} = this.props;
		demoDelAsync();
	}

	render() {
		const {value, user, demoAdd, demoDel, demoDelAsync} = this.props;
		return (
			<div>
				<h2>Demo</h2>
				<h2>{ value }</h2>
				<button onClick={demoAdd}>Increase</button>
				<span dangerouslySetInnerHTML={{__html: "<-->"}}></span>
				<button onClick={demoDel}>Decrease</button>
				<span dangerouslySetInnerHTML={{__html: "<-->"}}></span>
				<button onClick={demoDelAsync}>Increase_Async</button>
			</div>
		)
	}
}
//
// Counter.propTypes = {
// 	value: PropTypes.number.isRequired,
// 	increase: PropTypes.func.isRequired,
// 	decrease: PropTypes.func.isRequired,
// 	increase_async: PropTypes.func.isRequired,
// }