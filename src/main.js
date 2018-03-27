/*
 * Description: 项目入口脚本
 * User: zhaoyiming
 * Date: 2018/03/27
*/

import 'core-js/fn/object/assign';
import ReactDOM from 'react-dom';
import router from './router/router';

ReactDOM.render(router, document.querySelector('#app'));
