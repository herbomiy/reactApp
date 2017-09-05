import { handleActions } from 'redux-actions'

// demo状态数据
const demoState = () => ({
	value: 0
})

export const demoInfo = handleActions({
	'DEMO_ADD'(state, action) {
		console.log('DEMO_ADD = action = ', action)
		return { ...state, value: ++state.value }
	},
	'DEMO_DEL'(state, action) {
		console.log('DEMO_DEL = action = ', action)
		return { ...state, value: --state.value }
	},
}, demoState())