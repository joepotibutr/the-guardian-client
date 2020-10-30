import React from 'react';
import axios from 'axios'
import { ArticleListStyledWrapper } from './styled'
import { Link } from 'react-router-dom'

function ArticleList() {

  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get('http://localhost:8888')
        setArticles(data.response.results)
      } catch (err) {

      }
    }
    fetchArticles()
  }, [])


  return (
    <ArticleListStyledWrapper>
          <ul>
          {articles.length ? articles.map((article: any) => {
            return (
              <li key={article.id}>
                  <Link to={article.id}>
              <h3>{article.webTitle}</h3>
              </Link>
              </li>
            )
          }) : null}
          </ul>
    </ArticleListStyledWrapper>
  );
}

export default ArticleList;
