import React from 'react'
import s from './InfoMain.module.css'

const place = {
    action: 'Travel',
    title: 'When Is The Best Time of Year  To Visit Japan',
    description: 'The good news for travelers is that there is no single best time of your  to travel to Japan...'
}

export const InfoMain = () => {
    return (
        <React.StrictMode>
            <div className={s.wrapper}>
                <div className={s.box}>
                    <div className={s.action}>{place.action}</div>
                    <div className={s.title}>{place.title}</div>
                    <div className={s.description}>{place.description}</div>
                    <button className={s.button}>Read more</button>
                </div>
                <div className={s.wrapperButton}>
                    <button className={s.prevButton}>prev</button>
                    <button className={s.nextButton}>next</button>
                </div>
            </div>
        </React.StrictMode>
    )
}
