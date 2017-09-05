import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
// import UI component
import UI_Demo from "./Demo";
// import actions
import {DEMO_ACTIONS} from "actions";

// mapStateToProps goes here
function mapStateToProps(state) {
	return {
		value: state.demoInfo.value
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch) {
	return {
		demoAdd(){
			dispatch(DEMO_ACTIONS.demoAdd())
		},
		demoDel(){
			dispatch(DEMO_ACTIONS.demoDel())
		},
		// async dispatch
		demoDelAsync(){
			dispatch(DEMO_ACTIONS.demoDelAsync())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UI_Demo));