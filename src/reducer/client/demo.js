import { handleActions } from 'redux-actions'
import {DEMO_ACTIONS} from 'actions'

// demo状态数据
const demoState = () => ({
	value: 0,
	nickName: '白晶晶'
})

export const demoInfo = handleActions({
	[DEMO_ACTIONS.demoAdd().type](state, action) {
		console.log('state = ', state)
		console.log('action = ', action)
		return { ...state, value: ++state.value }
	},
	[DEMO_ACTIONS.demoDel().type](state, action) {
		console.log('DEMO_DEL = action = ', action)
		return { ...state, value: --state.value }
	},
}, demoState())