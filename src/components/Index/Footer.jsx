/*
 * Description: Footer
 * User: zhaoyiming
 * Date: 2018/3/26
*/

import React from 'react';

class Footer extends React.Component {
	constructor () {
		super();
		this.state = {
			a: '',
			b: ''
		};
	}

	static defaultProps = {
		title: '通过refs操作DOM'
	}

	changeA (e) {
		this.setState({
			a: e.target.value
		});
	}

	changeB (e) {
		this.setState({
			b: e.target.value
		});
	}

	getVal () {
		console.log(this.refs.inptB.value);
		this.refs.inptB.style.cssText = 'width: 200px; height: 100px';
	}

	render () {
		return (
			// React实现双向数据绑定，必须通过onChange事件去触发指定的function，然后手动设置对应的state
			<div className="footer">
				{
					// 当input属性为value时，如果不加onChange事件，则没有办法手动输入值
				}
				<input type="text" value={this.state.a} onChange={this.changeA.bind(this)} />

				{
					// 当input属性为defaultValue时，不加onChange事件，也可以手动改变输入框中的值
				}
				<input type="text" defaultValue={this.state.b} ref="inptB" onChange={this.changeB.bind(this)} />
				<button>按钮</button>

				<div className="row">{this.state.a}</div>
				<div className="row">{this.state.b}</div>
				<div className="row getVal" onClick={this.getVal.bind(this)}>{this.props.title}</div>
			</div>
		);
	}
}

export default Footer;