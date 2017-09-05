
// const App = (location, cb) => {require.ensure([], require => {cb(null, require('component/App').default)}, 'App')}

// Demo
// const Demo = (location, cb) => {require.ensure([], require => {cb(null, require('component/Demo').default)}, 'Demo')}

// const Welcome = (location, cb) => {require.ensure([], require => {cb(null, require('component/Welcome').default)}, 'Welcome')}
// const Counter = (location, cb) => {require.ensure([], require => {cb(null, require('component/Counter').default)}, 'Counter')}


import component from 'component'

export default [
	{
		path: '/',
		exact: true,
		component: component.App
	}, {
		path: '/demo',
		exact: true,
		component: component.Demo
	}, {
		path: '/welcome',
		component: component.Welcome
	}, {
		path: '/counter',
		exact:false,
		component: component.Counter
	}
]