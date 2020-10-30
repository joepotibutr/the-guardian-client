import React, { ReactElement } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { ArticleDetailStyled } from './styled'

interface Props {
    
}

export interface Content {
    apiUrl: string
    id: string
    isHosted: boolean
    pillarId: string
    pillarName: string
    sectionId:  string
    sectionName: string
    type: string
    webPublicationDate: Date
    webTitle: string
    webUrl: string
}

export default function ArticleDetail({}: Props): ReactElement {
    const [currentArticle, setCurrentArticle] = React.useState<null | Content>(null)
    const [fetchError, setErrors] = React.useState(null)

    let location = useLocation();

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get('http://localhost:8888/article',{
            params: {
                id: location.pathname
            }
        })
        setCurrentArticle(data.response.content)
      } catch (err) {
        setErrors(err)
      }
    }
    fetchArticles()
  }, [])

    return (
        <ArticleDetailStyled>
            {!fetchError && currentArticle ? (
                <div className="article">
                    <div className="publish-detail">
                        <span>{currentArticle.sectionName} |</span>
                        <span> {currentArticle.type} |</span>
                        <span> {new Date(currentArticle.webPublicationDate).toLocaleDateString()}</span>
                    </div>
                    <h1 className="web-title" onClick={() => window.open(currentArticle.webUrl)}>{currentArticle.webTitle}</h1>
                </div>
            ) : <h1>Loading ...</h1>}
        </ArticleDetailStyled>
    )
}
