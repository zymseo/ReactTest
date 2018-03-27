/*
 * Description: 新增媒体脚本
 * User: zhaoyiming
 * Date: 2018/03/27
*/

import React from 'react';
import {NavLink} from 'react-router-dom';

class AddMedia extends React.Component {
  render () {
    return (
      <div>
        <div>这里是新增媒体页</div>
        <NavLink to="/mediaList">返回媒体列表页</NavLink>
      </div>
    );
  }
}

export default AddMedia;