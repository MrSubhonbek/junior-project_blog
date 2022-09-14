import React from 'react'
import s from './Content.module.css'
type PropsType = {
    paragraph: string
    text: Array<string>
    img?: string
}
export const Content: React.FC<PropsType> = ({ paragraph, text, img }) => {
    const section = text.map(elem => {
        return (
            <div className={s.text}>{elem}</div>
        )
    })
    return (
        <div className={s.content}>
            <div className={s.paragraph}>{paragraph}</div>
            {section}
            {img && <div className={s.img}></div>}
        </div>
    )
}
