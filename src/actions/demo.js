import fetch from "isomorphic-fetch";
const DEMO = {
	demoAdd() {
		return {
			type: "DEMO_ADD"
		}
	},
	demoDel() {
		return {
			type: "DEMO_DEL"
		}
	},
	demoDelAsync() {
		console.log('DEMO_DEL_async = ', )
		return {
			type: "DEMO_DEL_ASYNC"
		}
	}
}

export default DEMO;