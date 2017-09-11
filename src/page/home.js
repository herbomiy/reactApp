import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import store from 'store';
// import actions
import {HOME_ACTIONS} from "actions";

import { Button } from 'antd-mobile';

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ['', '', ''],
			initialHeight: 200,
			dotStyle: {
				'textAlign': 'center'
			},
			dotActiveStyle: {
				'textAlign': 'center'
			}
		}
	}

	componentWillMount() {
	}

	componentDidMount() {
		// simulate img loading
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			});
		}, 100);
	}

	componentDidMount() {
		// simulate img loading
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			});
		}, 100);
	}
	render() {
		const hProp = this.state.initialHeight ? {height: this.state.initialHeight} : {};
		return (
			<div>

				<WingBlank>
					<div className="sub-title">Home</div>

				</WingBlank>
				<Carousel
					className="my-carousel"
					dots = {true}
					infinite= {true}
					selectedIndex={1}
					swipeSpeed={50}
					dotStyle = {this.state.dotStyle}
					dotActiveStyle = {this.state.dotActiveStyle}
					beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
					afterChange={index => console.log('slide to', index)}
				>
					{this.state.data.map(ii => (
						<a href="http://www.baidu.com" key={ii} style={hProp}>
							<img
								src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
								alt="icon"
								onLoad={() => {
									// fire window resize event to change height
									window.dispatchEvent(new Event('resize'));
									this.setState({
										initialHeight: null,
									});
								}}
							/>
						</a>
					))}
				</Carousel>
			</div>
		);
	}
}


// mapStateToProps goes here
function mapStateToProps(state) {
	return {
		state: {
			value: state.demoInfo.value
		}
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch) {
	return {
		demoAdd() {
			dispatch(HOME_ACTIONS.demoAdd())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));