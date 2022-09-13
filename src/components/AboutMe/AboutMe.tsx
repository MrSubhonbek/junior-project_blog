import React from 'react'
import s from './AboutMe.module.css'
export const AboutMe = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.bor}>
                <div className={s.ava}></div>
                <div className={s.name}>Asadulloev Subhonbek</div>
                <div className={s.aboutMe}>For as long as I can remember I’ve been obsessed with the idea of travel. I was always that person who was forever daydreaming of foreign lands and unfamiliar cultures; coming up with travel itineraries that would challenge my perceptions and help me gain a deeper understanding of the world.</div>
                <div className={s.followMe}>Follow me</div>
            </div>
            <div className={s.bor}>
                <div className={s.name}>Newsletter</div>
                <div className={s.aboutMe}>Subscribe to receive exclusive content updates, travel & photo tips!</div>
                <div className={s.email}>
                    <div className={s.followMe}>Email address</div>
                    <input className={s.input} value='test123@test.com'/>
                    <button className={s.subscribe}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
