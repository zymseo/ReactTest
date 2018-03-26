/*
 * Description: List
 * User: zhaoyiming
 * Date: 2018/3/26
*/

import React from 'react';

class List extends React.Component {
	constructor () {
		super();
		this.state = {
			
		};
	}

	static defaultProps = {
		
	}

	componentDidMount () {
		// 读取url中的参数
		console.log(this.props.match.params.a);
		console.log(this.props.match.params.b);
	}

  render () {
    return (
			<div>
				List
			</div>
    )
  }
}

export default List;
