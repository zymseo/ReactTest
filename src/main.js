import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

import App from './components/Index/Index';
import List from './components/List/List';
import Article from './components/Article/Article';

// Render the main component into the dom
ReactDOM.render(
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/list/1/2">List</Link></li>
				<li>
					<NavLink 
						to="/article/3"
						activeStyle={{
							color: '#f00'
						}}
					>Article
					</NavLink>
				</li>
			</ul>
			<div>
				 <Route exact path="/" component={App} />
				 <Route exact path="/list/:a/:b" component={List} />
				 <Route exact path="/article/:a" component={Article} />
			</div>
		</div>
	</Router>, 
	document.getElementById('app')
);
