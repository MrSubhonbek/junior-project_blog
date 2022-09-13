import React from 'react'
import { Articles } from '../../components/HomePage/Articles/Articles'
import { Category } from '../../components/HomePage/Category/Category'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { AboutMe } from '../../components/HomePage/AboutMe/AboutMe'
import { InfoMain } from '../../components/HomePage/Info/InfoMain'
import s from './Home.module.css'

const data = [{
    img: "IMG",
    hashtag: "#Guides",
    title: 'Coventry City Guide Including Coventry Hotels',
    text: 'The diseases most commonly seen in travelers are diarrhoeal, malaria (if you travel in a malaria-infested area), accidents (when traveling by automobile or swimming), wound infections and...'
},
{
    img: "IMG",
    hashtag: "#Guides",
    title: 'Coventry City Guide Including Coventry Hotels',
    text: 'The diseases most commonly seen in travelers are diarrhoeal, malaria (if you travel in a malaria-infested area), accidents (when traveling by automobile or swimming), wound infections and...'
},
{
    img: "IMG",
    hashtag: "#Guides",
    title: 'Coventry City Guide Including Coventry Hotels',
    text: 'The diseases most commonly seen in travelers are diarrhoeal, malaria (if you travel in a malaria-infested area), accidents (when traveling by automobile or swimming), wound infections and...'
}]



export const Home = () => {
    const articles = data.map(elem => { return (<Articles {...elem} />) })
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
