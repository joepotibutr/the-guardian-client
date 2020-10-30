import React from 'react';
import { AppStyledWrapper } from './styled'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import ArticleList from '../ArticleList'
import ArticleDetail from '../ArticleDetail';

function App() {

  return (
    <Router>
      <AppStyledWrapper>
      <Switch>
            <Route path={`/:articleId`}>
              <ArticleDetail />
            </Route>
            <Route path="/">
              <ArticleList />
            </Route>
          </Switch>
      </AppStyledWrapper>
    </Router>
    
  );
}

export default App;
