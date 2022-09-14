import React from 'react'
import { DescriptionsType } from '../../../store/interface'
import s from './Title.module.css'
export const Title: React.FC<DescriptionsType> = ({ title, action, date }) => {
    return (
        <div className={s.head}>
            <div className={s.wrapper}>
                <div className={s.title}>{title}</div>
                <div className={s.hashtagTime}>
                    <div className={s.categoryName}>{action}</div>
                    <div className={s.timeReading}>{date}</div>
                </div>
                <div className={s.line} />
            </div>
        </div>
    )
}
