import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import store from 'store';
// import actions
import {DEMO_ACTIONS} from "actions";
// import { WhiteSpace} from 'antd-mobile';
class Demo extends Component {
	constructor(props) {
		super(props);
		console.log('super props = ', props)
		this.state = {
			focused: false,
			focused1: false,
			hasError: false,
			client: {
				userPhone: '18301076802',
				verificationCode: ''
			},
			visible: false
		}
	}
	componentWillMount() {
	}
	componentDidMount() {
		this.props.demoDelAsync();
	}
	render() {
		const {value, demoAdd, demoDel, demoDelAsync} = this.props;
		console.log('this.props = ', this)
		console.log('this.state = ', this.state)
		console.log('this.store = ', store.getState())
		return (
			<div>
				{/*<WhiteSpace></WhiteSpace>*/}
				<h2>Demo</h2>
				<h2>{ value }</h2>
				<h2>StoreValue: { store.getState().demoInfo.value }</h2>
				<button onClick={demoAdd}>Increase</button>
				<span dangerouslySetInnerHTML={{__html: "<-->"}}></span>
				<button onClick={demoDel}>Decrease</button>
				<span dangerouslySetInnerHTML={{__html: "<-->"}}></span>
				<button onClick={demoDelAsync}>Increase_Async</button>
				<button onClick={e => this.props.history.push('/counter')}>goCounter</button>
				<h5>{console.log(document.documentElement.clientWidth)}</h5>
			</div>
		)
	}
}

// mapStateToProps goes here
function mapStateToProps(state) {
	return {
		state: {
			value: state.demoInfo.value
		}
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch) {
	return {
		demoAdd() {
			dispatch(DEMO_ACTIONS.demoAdd())
		},
		demoDel() {
			dispatch(DEMO_ACTIONS.demoDel())
		},
		demoDelAsync(){
			dispatch(DEMO_ACTIONS.demoDelAsync())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Demo));