import React from 'react'
import {Select, HeaderStyled} from './styled'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Content } from '../../pages/ArticleDetail'

interface Props {
    setArticles: (articles: Array<Content>) => void
}

export default (props: Props) => {
    const [searchConfig, setSearchConfig] = React.useState({
        searchTerms: '',
        orderBy: 'newest'
    })
    const [value, setValue] = React.useState(''); 

    const timeoutRef = React.useRef(null) 

    React.useEffect(() => {
    const timeout = setTimeout(()=> {
        if (value !== '') {
                setSearchConfig(prev => ({ ...prev, searchTerms: value }))
                props.setArticles([])
                search('searchTerms', value);
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
                <div className="search-bar">
                    <input ref={timeoutRef} onChange={(e) => setValue(e.target.value)} className="search-input" type="text" />
                    <Select defaultValue="newest" onChange={(e) => search('orderBy',e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </Select>
                    {/* <Link to="/"><img onClick={() => search(searchTerms)} className="search-icon" src={LoupeLogo}/></Link> */}
                </div>
                <div className="logo">
                    <Link to="/">The Guardian</Link>
                </div>
            </div>
        </HeaderStyled>
    )
}
