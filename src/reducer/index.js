import {
	routerReducer as routing,
} from 'react-router-redux'
import {
	combineReducers,
} from 'redux'


// demo
import {
	demoInfo,
} from './client/demo'

const rootReducer = combineReducers({
	routing,
	config: (state = {}) => state,
	demoInfo


});

export default rootReducer;