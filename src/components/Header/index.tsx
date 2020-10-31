import React from 'react'
import {Select, HeaderStyled} from './styled'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Content } from '../../pages/ArticleDetail'

interface Props {
    setArticles: (articles: Array<Content>) => void
}

enum SEARCH_CONFIG {
    ORDER_BY = 'orderBy',
    SEARCH_TERMS = 'searchTerms'
}

export default (props: Props) => {
    const [searchConfig, setSearchConfig] = React.useState({
        searchTerms: '',
        orderBy: 'newest'
    })

    const history = useHistory()
    

    const [value, setValue] = React.useState(''); 

    const timeoutRef = React.useRef(null) 

    React.useEffect(() => {
    const timeout = setTimeout(()=> {
        if (value !== '') {
                props.setArticles([])
                setSearchConfig(prev => ({ ...prev, searchTerms: value }))
                history.push('/')
                search(SEARCH_CONFIG.SEARCH_TERMS, value);
            }
        }, 1500);

    return () => {
        clearTimeout(timeout)
    }                          
    },[value])

    async function search(type: string,value: string) {
        const { data } = await axios.post('http://localhost:8888/',{
            data: {
                ...searchConfig,
                [type]: value
            }
        })

        props.setArticles(data.response.results || [])
    }

    return (
        <HeaderStyled>
            <div className="header-layout">
                <div className="header-title">
                    <div className="search-bar">
                        <span className="input-wrapper">
                            <input ref={timeoutRef} onChange={(e) => setValue(e.target.value)} className="search-input" type="text" />
                        </span>
                        <Select  value={searchConfig.orderBy} onChange={(e) => {
                            setSearchConfig(prev => ({ ...prev, orderBy: e.target.value }))
                            search(SEARCH_CONFIG.ORDER_BY, e.target.value)
                            }}>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </Select>
                    </div>
                    <div className="logo">
                        <Link to="/">The Guardian</Link>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    )
}
