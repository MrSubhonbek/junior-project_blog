import React from 'react'
import { Category } from '../../components/Category/Category'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { InfoMain } from '../../components/Info/InfoMain'
import s from './Home.module.css'
export const Home = () => {
    return (
        <React.StrictMode>
            <div className={s.head}>
                <Header />
                <InfoMain />
            </div>
            <div className={s.content}>
                <Category />
            </div>
            <Footer/>
        </React.StrictMode>
    )
}
