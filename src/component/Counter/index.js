import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import UI component
import UI_Counter from "./Counter";
// import actions
import { COUNTER_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		value:state.counter.value
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		increase(){
			dispatch(COUNTER_ACTIONS.increase())
		},
		decrease(){
			dispatch(COUNTER_ACTIONS.decrease())
		},
		// async dispatch
		increase_async(){
			dispatch(COUNTER_ACTIONS.increase_async())
		}
	}
}

// build container-component

// const Counter = connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
// )(UI_Counter);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UI_Counter));