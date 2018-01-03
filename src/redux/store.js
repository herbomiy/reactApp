import { createStore, applyMiddleware } from "redux";
// in productrion enviroment, you may need comment logger middleware
import Logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import reducer from "reducer";


function configureStore() {
	let store = createStore(reducer, applyMiddleware(ReduxThunk, Logger), );
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store
}

const store = configureStore()
// console.log(store.getState())

export default store;