import React from 'react'
import { Content } from '../../components/SingleArticlePage/Content/Content'
import { Title } from '../../components/SingleArticlePage/Title/Title'
import { dataArticle } from '../../store/data'
import s from './SingleArticle.module.css'

export const SingleArticle = () => {
    const content = dataArticle.map (elem => {
        return (
            <Content {...elem} />
        )
    })
    return (
        <div className={s.article}>
            <Title />
            {content}
        </div>
    )
}
