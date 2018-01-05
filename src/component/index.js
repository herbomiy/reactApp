import App from 'bundle-loader?lazy&name=App!component/App'
import Counter from 'bundle-loader?lazy&name=Counter!component/Counter'
import Welcome from 'bundle-loader?lazy&name=Welcome!component/Welcome'
import NotFound from 'bundle-loader?lazy&name=Welcome!component/NotFound/NotFound'
export default {
	App,
	Counter,
	Welcome,
	NotFound
}