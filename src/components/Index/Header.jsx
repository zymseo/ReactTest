/*
 * Description: Header
 * User: zhaoyiming
 * Date: 2018/3/26
*/

import React from 'react';

class Header extends React.Component {
	constructor () {
		super();
		this.state = {
			
		};
	}

	static defaultProps = {
		
	}

	componentWillReceiveProps (props) {
		console.log('Header子组件收到了props更新');
		console.log(this.props);
		console.log(props);
	}

	shouldComponentUpdate () {
		return true;
	}

  render () {
    return (
			<div className="header">
				<div>{this.props.title}</div>
				<button onClick={this.props.parentAddNum}>子组件操作父组件更新数据</button>
			</div>
    )
  }
}

export default Header;
