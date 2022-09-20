import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Endpoints } from '../../../shared/constants';
import { DescriptionsType } from '../../../store/interface'
import s from './Articles.module.css'
export const Articles: React.FC<DescriptionsType> = ({ img, hashtag, title, shortText }) => {
  const navigate = useNavigate();
  const clickArticleHandler = () => {
    navigate(Endpoints.Article)
  }
  return (
    <React.StrictMode>
      <div className={s.card}>
        <div className={s.img}>{img}</div>
        <div className={s.description}>
          <div className={s.hashtag}>{hashtag}</div>
          <div className={s.title}>{title}</div>
          <div className={s.text}>{shortText}</div>
          <button className={s.readMe} onClick={clickArticleHandler}>Read more</button>
        </div>
      </div>
    </React.StrictMode>
  )
}
