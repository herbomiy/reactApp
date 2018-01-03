import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import store from 'store';
// import actions
import {DEMO_ACTIONS} from "actions";
import { WhiteSpace, Button} from 'antd-mobile';

class Demo extends Component {
	constructor(props) {
		super(props);
		console.log('super props = ', props)
		this.state = {
			focused: false,
			focused1: false,
			hasError: false,
			client: {
				userPhone: '18301076802',
				verificationCode: ''
			},
			visible: false
		}
	}
	componentWillMount() {
	}
	componentDidMount() {
		this.props.demoDelAsync();
	}
	render() {
		const {value, demoAdd, demoDel, demoDelAsync} = this.props;
		console.log('this.props = ', this.props.name)
		console.log('this.state = ', this.state)
		console.log('this.store = ', store.getState())
		return (
			<div>
				<WhiteSpace></WhiteSpace>
				<h2 style={{textAlign: 'center'}}>测试页面</h2>

				<h2>StoreValue: { store.getState().demoState.value }</h2>
				<Button type="primary"  inline size="small"  onClick={demoAdd}>加一</Button>
				<br/>

				<Button type="primary"  inline size="small" onClick={demoDel}>减一</Button>
				<br/>

				<Button type="primary"  inline size="small" onClick={demoDelAsync}>减一 - 异步</Button>

				<br/>

				<Button type="primary"  inline size="small" onClick={e => this.props.history.push('/counter')}>goCounter</Button>
				<br/>

					<p>中新网1月3日电 据美国中文网报道，2018年的前几天，大部分美国人在寒冷中度过，截至目前，至少已经有8人死于低温严寒。低温仍在持续。</p>


					<p>本周, 一场新的暴风雪正在向东南方向移动, 将会给所到之处带来大量降雨和降雪。与此同时, 美国东北部正准备迎接另一场北极冷空气，本周末将出现再一次大幅降温。</p>

					<p>资料图：大雪袭击美国宾州，雪后房屋变成“奶油蛋糕”。</p>
					<p>资料图：大雪袭击美国宾州，雪后房屋变成“奶油蛋糕”。</p>
					<p>【美国东南部：大雪落在海滩上】</p>

					<p>当地时间2日早，有40州因严寒或降雪而发出冬季警报。据报道, 从中西部到东北部, 到墨西哥湾沿岸, 将会普遍出现低温天气。3日上午，佛罗里达州东部将开始形成低气压, 给佛州西杰克逊维尔地区到佐治亚州南部带来降雨降雪。南卡州甚至会出现大雪覆盖海滩的景象。</p>

					<p>风暴系统将迅速加强, 因为它在东海岸移动, 南卡州的查尔斯顿, 北卡州威尔明顿将出现降雨降雪和冻雨现象。</p>

					<p>当地时间2018年1月2日，美国纽约，消防员对抗布朗克斯区的大火。火灾发生在寒冷的凌晨，据报道多人受伤，超过200名消防队员投入灭火。</p>
					<p>当地时间2018年1月2日，美国纽约，消防员对抗布朗克斯区的大火。火灾发生在寒冷的凌晨，消防部门喷水带来了“冰封世界”。</p>
					<p>【美东雪上加霜：周末再次大降温】</p>

					<p>3日夜间到4日凌晨，弗吉尼亚南部和新泽西州将受到风暴系统影响，很高概率将出现降雪。</p>

					<p>4日下午, 风暴系统预计将到达长岛以东, 华盛顿特区, 费城和纽约市的东部地区，以上地区将出现大量降雪。华盛顿和费城可能降雪规模相对较小, 但波士顿地区可能出现超过6英寸(约合15厘米)降雪，而缅因州北部降雪甚至可以达到1英尺(约合30.5厘米)。</p>

					<p>然而还不只是这些，在5日早晨美东还将再一次迎来冷空气。东北部最寒冷的一天将会是6日, 波士顿甚至可能出现低至华氏0度(约合零下17.8摄氏度)的低温，还伴随着刺骨的寒风。</p>

					<p>【中西部：低温严寒致学校停课】</p>

					<p>平原和中西部地区相比之下将略微温和。明尼阿波利斯的气温将在2日从华氏零下上升到12度(约合零下11摄氏度)，但到本周末, 大湖区的气温将再次逼近华氏零度。</p>

				<p>					由于低温，印第安纳波利斯公立学校和辛辛那提公立学校都取消了2日的课程。也有很多活动受天气影响相继取消。</p>

				<h5>{console.log(document.documentElement.clientWidth)}</h5>
			</div>
		)
	}
}

// mapStateToProps goes here
function mapStateToProps(state) {
	return {
		state: {
			value: state.demoState.value
		}
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch) {
	return {
		demoAdd() {
			dispatch(DEMO_ACTIONS.demoAdd())
		},
		demoDel() {
			dispatch(DEMO_ACTIONS.demoDel())
		},
		demoDelAsync(){
			dispatch(DEMO_ACTIONS.demoDelAsync())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Demo));