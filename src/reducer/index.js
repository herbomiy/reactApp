import {
	routerReducer as routing,
} from 'react-router-redux'
import {
	combineReducers,
} from 'redux'


// client
import client from './client/index'
// worker
import worker from './worker/index'

import home from './home'


const rootReducer = combineReducers({
	routing,
	config: (state = {}) => state,
	...client,
	...worker,
	home
});

export default rootReducer;