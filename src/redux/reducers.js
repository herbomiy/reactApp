import {
	routerReducer as routing,
} from 'react-router-redux'
import {
	combineReducers,
} from 'redux'


import home from './reducers/home'
import counter from './reducers/counter'
import demoState from './reducers/demo'

const rootReducer = combineReducers({
	routing,
	config: (state = {}) => state,
	home,
	demoState,
	counter
});

export default rootReducer;