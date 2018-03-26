/*
 * Description: Article
 * User: zhaoyiming
 * Date: 2018/3/26
*/

import React from 'react';

class Article extends React.Component {
	constructor () {
		super();
		this.state = {
			
		};
	}

	static defaultProps = {
		
	}

	componentDidMount () {
		console.log(this.props.match.params.a);
	}

  render () {
    return (
			<div>
				<div>Article</div>
			</div>
    )
  }
}

export default Article;
