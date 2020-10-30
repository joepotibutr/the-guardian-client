import styled from 'styled-components'


export const ArticleListStyledWrapper = styled.div`
  text-align: center;
  text-align: left;
  padding: 20px;

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }


`

export const Select = styled.select`
    height: 40px;
    padding: 10px;
    border-radius: 6px;

`

export const ArticleItem = styled.li`
  margin-bottom: 25px;
 
  > a {
    color: #0E2A5E;
    cursor: pointer;
    text-decoration: none;

    .article-title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    &:hover {
        text-decoration: underline;
    }
  }
  

`
