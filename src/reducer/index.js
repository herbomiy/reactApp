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
const rootReducer = combineReducers({
	routing,
	config: (state = {}) => state,
	...client,
	...worker
});

export default rootReducer;