
/*
* 初始化state
 */
const initState = {
	value: 0,
	operType: 'DEMO'

};

export default function demoState(state = initState, action) {
	switch(action.type) {
		case "DEMO_ADD":
			return {
				value: ++state.value,
				count: 'DEMO_ADD'
			};
		case "DEMO_DEL":
			return {
				value: --state.value
			}
		case "DEMO_DEL_ASYNC":
			return {
				value: state.value + 2
			}
		// this is required
		default:
			return state;
	}
}
