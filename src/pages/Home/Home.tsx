import React from 'react'
import { Articles } from '../../components/HomePage/Articles/Articles'
import { Category } from '../../components/HomePage/Category/Category'
import { AboutMe } from '../../components/HomePage/AboutMe/AboutMe'
import { InfoMain } from '../../components/HomePage/Info/InfoMain'
import s from './Home.module.css'
import { dataHome } from '../../store/data'

export const Home = () => {
    const articles = dataHome.map(elem => { return (<Articles {...elem} />) })
    return (
        <React.StrictMode>
            <div className={s.head}>
                <InfoMain />
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
