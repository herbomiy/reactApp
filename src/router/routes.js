// 公共组件
import component from 'component'
// 业务组件
import page from 'page'


export default [
	{
		path: '/',
		exact: true,
		component: page.Home
	}, {
		path: '/demo',
		exact: true,
		component: page.Demo
	}, {
		path: '/welcome',
		component: component.Welcome
	}, {
		path: '/counter',
		exact: true,
		component: component.Counter
	}, {
		path: '/404',
		component: component.NotFound
	}
]