import React from 'react'
import { DescriptionsType } from '../../../store/interface'
import s from './Articles.module.css'
export const Articles:React.FC<DescriptionsType> = ({img, hashtag, title, shortText}) => {
  return (
    <React.StrictMode>
        <div className={s.card}>
            <div className={s.img}>{img}</div>
            <div className={s.description}>
                <div className={s.hashtag}>{hashtag}</div>
                <div className={s.title}>{title}</div>
                <div className={s.text}>{shortText}</div>
                <button className={s.readMe}>Read more</button>
            </div>
        </div>
    </React.StrictMode>
  )
}
