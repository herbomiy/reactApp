
// const App = (location, cb) => {require.ensure([], require => {cb(null, require('component/App').default)}, 'App')}

// Demo
// const Demo = (location, cb) => {require.ensure([], require => {cb(null, require('component/Demo').default)}, 'Demo')}

// const Welcome = (location, cb) => {require.ensure([], require => {cb(null, require('component/Welcome').default)}, 'Welcome')}
// const Counter = (location, cb) => {require.ensure([], require => {cb(null, require('component/Counter').default)}, 'Counter')}


import App from 'component/App'
import Demo from 'component/Demo'
import * as Welcome from 'component/Welcome'
import * as Counter from 'component/Counter'
import component from 'component'

export default [
	{
		path: '*',
		exact: true,
		component: Welcome
	}
	// ,{
	// 	path: '*',
	// 	exact: true,
	// 	component: Welcome
	// }, {
	// 	path: '/welcome',
	// 	component: Welcome
	// }, {
	// 	path: '/counter',
	// 	exact:false,
	// 	component: Counter
	// }
]