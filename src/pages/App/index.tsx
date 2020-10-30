import React from 'react';
import { AppStyledWrapper } from './styled'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios'

import Header from '../../components/Header'
import ArticleList from '../ArticleList'
import ArticleDetail, { Content } from '../ArticleDetail';

function App() {
  const [articles, setArticles] = React.useState<Array<Content>>([])
  const [fetchError, setErrors] = React.useState(null)

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get('http://localhost:8888')
        setArticles(data.response.results || [])
      } catch (err) {
        setErrors(err)
      }
    }
    fetchArticles()
  }, [])

  return (
    <Router>
      <Header setArticles={(articles: Array<Content>) => setArticles(articles)}/>
      <AppStyledWrapper>
        <Switch>
            <Route path={`/:articleId`}>
              <ArticleDetail />
            </Route>
            <Route path="/">
              <ArticleList articles={articles}/>
            </Route>
        </Switch>
      </AppStyledWrapper>
    </Router>
    
  );
}

export default App;
