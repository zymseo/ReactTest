/*
 * Description: Index
 * User: zhaoyiming
 * Date: 2018/3/26
*/

require('./index.less');

import React from 'react';
import Header from './Header';
import Footer from './Footer';

class AppComponent extends React.Component {
	constructor () {
		super();
		this.state = {
			num: 1
		};
	}

	static defaultProps = {
		
	}

	componentWillMount () {
		console.log('组件即将初始化:'  + this.state.num);
	}

	componentDidMount () {
		console.log('组件初始化完成:' + this.state.num);
	}

	componentWillUpdate () {
		console.log('componentWillUpdate:' + this.state.num);
	}

	componentDidUpdate () {
		console.log('componentDidUpdate:' + this.state.num);
	}

	shouldComponentUpdate (props, state) {
		console.log('当前组件要重新渲染了');
		console.log(props);
		console.log(state);
		return true;
	}

	reduce () {
		this.setState({
			num: this.state.num -= 1
		});
	}

	add () {
		this.setState({
			num: this.state.num += 1
		});
	}

  render () {
    return (
			<div className="content">
				<Header title={this.state.num} parentAddNum={this.add.bind(this)} />

				<input type="button" value="-1" onClick={this.reduce.bind(this)} />
				<span className="num-box">{this.state.num}</span>
				<input type="button" value="+1" onClick={this.add.bind(this)}  />

				<Footer />
			</div>
    )
  }
}

export default AppComponent;
