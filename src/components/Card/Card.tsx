import React from 'react'
import s from './Card.module.css'
type PropsType = {
    title: string
}
export const Card:React.FC<PropsType> = ({title}) => {
  return (
    <div className={s.card}>
        {title}
        <div className={s.wrapper}/>
        </div>
  )
}
