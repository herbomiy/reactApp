import fetch from "isomorphic-fetch";
const HOME = {
	homeAdd() {
		return {
			type: "HOME_ADD"
		}
	},
	homeDel() {
		return {
			type: "HOME_DEL"
		}
	},
	homeDelAsync() {
		console.log('HOME_DEL_async = ', )
		return {
			type: "HOME_DEL_ASYNC"
		}
	}
}

export default HOME;