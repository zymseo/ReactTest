/*
 * Description: 左侧导航脚本
 * User: zhaoyiming
 * Date: 2018/03/27
*/

require('./nav.less');

import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  render () {
    return (
      <div className="nav">
        <div className="title">系统导航</div>
        <ul className="list">
          <li className="item">
            <a href="javascript:;" className="slide">媒体管理</a>
            <NavLink to="/mediaList" className="link">列表</NavLink>
            <NavLink to="/addMedia" className="link">新增</NavLink>
            <NavLink to="/checkMedia" className="link">审核</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav;