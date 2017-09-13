import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import store from 'store';
// import actions
import {HOME_ACTIONS} from "actions";


import { Carousel, WhiteSpace, WingBlank, Button, Flex, Icon} from 'antd-mobile';

class Home extends Component {
	constructor(props) {
		console.log('props = ', props)
		super(props)
		this.state = {
			data: ['', '', ''],
			initialHeight: 200,
			control: {
				header : {
					maxWidth: '100%'
				}
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
		}, 10);
	}
	render() {
		return (
			<div>
				<WingBlank className="txt-center">
					<div onClick={this.props.homeAdd}><h4 className="txt-center">AA</h4></div>
					<p style={{fontSize: '24px'}}>我是描述</p>
					<img src={require('assets/image/yuanyuan.jpg')} alt="" style={this.state.control.header}/>
				</WingBlank>
				<Carousel
					className="my-carousel"
					dots = {false}
					infinite = {true}
					autoplay = {true}
					selectedIndex={1}
					swipeSpeed={25}
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
				<WingBlank>
					<Button type="primary"  inline size="small" onClick={ e => {this.props.history.push('/Demo')}}>primary Button</Button>
					<Button type="ghost" inline size="small">primary Button</Button>
					<Button type="primary" inline size="small">primary Button</Button>
					<Icon type="check" size="md" color="gray" />
					<h5>{setTimeout(() => console.log('w>h : ', document.documentElement.clientWidth, document.documentElement.clientHeight), 1002)}</h5>
				</WingBlank>



			</div>
		);
		const hProp = this.state.initialHeight ? {height: this.state.initialHeight} : {};
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
		homeAdd() {
			dispatch(HOME_ACTIONS.homeAdd())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));