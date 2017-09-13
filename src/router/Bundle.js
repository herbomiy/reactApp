// router 按需加载
import React, {Component} from 'react'

class Bundle extends Component {
	state = {
		// short for "module" but that's a keyword in js, so "mod"
		mod: null
	};

	componentWillMount() {
		this.load(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps)
		}
	}

	load(props) {
		this.setState({
			mod: null
		});
		props.load((mod) => {
			this.setState({
				mod: mod.default ? mod.default : mod
			})
		})
	}
	render() {
		return this.props.children(this.state.mod)
	}
}

export default Bundle;