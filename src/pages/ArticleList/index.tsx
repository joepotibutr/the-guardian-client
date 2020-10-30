import React from 'react';
import { ArticleListStyledWrapper, ArticleItem, Select } from './styled'
import { Link } from 'react-router-dom'
import { Content } from '../ArticleDetail'

interface Props {
  articles: Array<Content>
}

function ArticleList({ articles }: Props) {


  return (
    <ArticleListStyledWrapper>
    
          <ul className="list">
          {articles.length ? articles.map((article: any) => {
            return (
              <>
              <ArticleItem key={article.id}>
                  <Link to={article.id}>
                    <h3 className="article-title">{article.webTitle}</h3>
                  </Link>
              </ArticleItem>
              <hr/>
              </>

            )
          }) : <h1>Loading ...</h1>}
          </ul>
    </ArticleListStyledWrapper>
  );
}

export default ArticleList;
