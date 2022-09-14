import React from 'react'
import { Articles } from '../../components/HomePage/Articles/Articles'
import { Category } from '../../components/HomePage/Category/Category'
import { AboutMe } from '../../components/HomePage/AboutMe/AboutMe'
import { InfoMain } from '../../components/HomePage/Info/InfoMain'
import s from './Home.module.css'
import { themes } from '../../store/data'

export const Home = () => {
    const articles = themes.map((elem, index) => {
        return (
            <Articles key={index} {...elem.descriptions} />
        )
    })
    return (
        <React.StrictMode>
            <div className={s.head}>
                <InfoMain {...themes[0].descriptions}/>
            </div>
            <div className={s.content}>
                <Category />
            </div>
            <div className={s.article}>
                <div>
                    <span>Recent articles</span>
                    <div>{articles}</div>
                </div>
                <AboutMe />
            </div>
        </React.StrictMode>
    )
}
