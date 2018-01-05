import React, {Component} from "react";

export default class Demo extends Component {
	constructor(props) {


		super(props)
	}

	componentDidMount() {
		console.log('this.props = ', this.props)
		let {increase_async} = this.props;
		increase_async();
	}

	render() {
		const {increase, decrease, increase_async} = this.props;
		return (
			<div>
				<h2>Counter</h2>
				<button onClick={increase}>Increase</button>
				<span dangerouslySetInnerHTML={{__html: "<-->"}}></span>
				<button onClick={decrease}>Decrease</button>
				<span dangerouslySetInnerHTML={{__html: "<-->"}}></span>
				<button onClick={increase_async}>Increase_Async</button>
			</div>
		)
	}
}
