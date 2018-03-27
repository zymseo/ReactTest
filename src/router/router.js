import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import App from '../components/App/app';
import MediaList from '../components/Media/list';
import AddMedia from '../components/Media/add';
import CheckMedia from '../components/Media/check';
import Test from '../components/Media/test';

const router = (
  <Router>
    <App>
      <Switch>
        <Route path="/mediaList" component={MediaList} />
        <Route path="/addMedia" component={AddMedia} />
        <Route path="/checkMedia" render={() => {
          return (
            <CheckMedia>
              <Switch>
                <Route path="/checkMedia/test" component={Test} />
              </Switch>
            </CheckMedia>
          );
        }} />
        <Redirect from="/" to="/mediaList" />{/*重定向*/}
      </Switch>
    </App>
  </Router>
);

export default router;