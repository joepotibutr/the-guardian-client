import React from 'react';
import axios from 'axios'
import { AppStyledWrapper } from './styled'

function App() {

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
    <AppStyledWrapper>
      <header className="App-header">
          <ul>
          {articles.length && articles.map((article: any) => {
            return (
              <li key={article.id}>
              <h3>{article.webTitle}</h3>
              </li>
            )
          })}
          </ul>
      </header>
    </AppStyledWrapper>
  );
}

export default App;
