/*
 * Description: 项目主框架脚本
 * User: zhaoyiming
 * Date: 2018/03/27
*/

require('./app.less');

import React from 'react';
import Nav from '../Nav/nav';

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;