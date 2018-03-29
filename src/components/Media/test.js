require('./test.less');

import React from 'react';

class Test extends React.Component {
  componentDidMount () {
    console.log(this.props.match.params);
  }

  render () {
    return (
      <div className="test-container">
        路由参数为：
        <div>a:{this.props.match.params.a}</div>
        <div>b:{this.props.match.params.b}</div>
      </div>
    );
  }
}

export default Test;