/*
 * Description: 媒体审核脚本
 * User: zhaoyiming
 * Date: 2018/03/27
*/

import React from 'react';
import {NavLink} from 'react-router-dom';

class CheckMedia extends React.Component {
  render () {
    return (
      <div>
        <div>这里是媒体审核页</div>
        <NavLink to="/checkMedia/test">查看Test子组件</NavLink>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CheckMedia;