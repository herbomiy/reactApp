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
	}
}

export default DEMO;