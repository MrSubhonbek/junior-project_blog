import React from 'react'
import { Content } from '../../components/SingleArticlePage/Content/Content'
import { Title } from '../../components/SingleArticlePage/Title/Title'
import { themes } from '../../store/data'
import s from './SingleArticle.module.css'
type PropsType = {
    id: number
}
export const SingleArticle:React.FC<PropsType> = ({id}) => {
    const content = themes[id].articles.map ((elem, index) => {
        return (
            <Content key={index} {...elem}/>
        )
    })
    return (
        <div className={s.article}>
            <Title {...themes[id].descriptions}/>
            {content}
        </div>
    )
}
