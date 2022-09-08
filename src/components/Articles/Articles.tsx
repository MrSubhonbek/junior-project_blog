import React from 'react'
import s from './Articles.module.css'
type PropsType = {
    img: string
    hashtag:string
    title:string
    text:string
}
export const Articles:React.FC<PropsType> = ({img, hashtag, title, text}) => {
  return (
    <React.StrictMode>
        <div className={s.card}>
            <div className={s.img}>{img}</div>
            <div className={s.description}>
                <div className={s.hashtag}>{hashtag}</div>
                <div className={s.title}>{title}</div>
                <div className={s.text}>{text}</div>
                <button className={s.readMe}>Read more</button>
            </div>
        </div>
    </React.StrictMode>
  )
}
