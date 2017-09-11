// const App = (location, cb) => {require.ensure([], require => {cb(null, require('component/App').default)}, 'App')}

// Demo
// const Demo = (location, cb) => {require.ensure([], require => {cb(null, require('component/Demo').default)}, 'Demo')}

// const Welcome = (location, cb) => {require.ensure([], require => {cb(null, require('component/Welcome').default)}, 'Welcome')}
// const Counter = (location, cb) => {require.ensure([], require => {cb(null, require('component/Counter').default)}, 'Counter')}

// 公共组件
import component from 'component'
// 业务组件
import page from 'page'

// (location, cb) => { require.ensure([], require => {cb(null, require(component.App).default)}), 'App'}

const loadModule = (cb) => (componentModule) => {
	cb(null, componentModule.default);
}
const errorLoading = (err) => {
	console.error('Dynamic page loading failed', err); //eslint-disable-line no-console
}

export default [
	{
		path: '/',
		exact: true,
		component: page.Home
	}, {
		path: '/demo',
		exact: true,
		component: component.Demo
	}, {
		path: '/welcome',
		component: component.Welcome
	}, {
		path: '/counter',
		exact: true,
		component: component.Counter
	}
]