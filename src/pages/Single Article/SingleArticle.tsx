import React from 'react'
import { useParams } from 'react-router-dom'
import { Content } from '../../components/SingleArticlePage/Content/Content'
import { Title } from '../../components/SingleArticlePage/Title/Title'
import { themes } from '../../store/data'
import s from './SingleArticle.module.css'
export const SingleArticle:React.FC = () => {
    const {articleId} = useParams();    
    const content = themes[Number(articleId)].articles.map ((elem, index) => {
        return (
            <Content key={index} {...elem}/>
        )
    })
    return (
        <div className={s.article}>
            <Title {...themes[Number(articleId)].descriptions}/>
            {content}
        </div>
    )
}
