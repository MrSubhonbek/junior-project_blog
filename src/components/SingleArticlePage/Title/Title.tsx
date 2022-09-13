import React from 'react'
import s from './Title.module.css'
export const Title = () => {
    return (
        <div className={s.head}>
            <div className={s.wrapper}>
                <div className={s.title}>
                    When Is The Best Time
                    of Year To Visit Japan?
                </div>
                <div className={s.hashtagTime}>
                    <div className={s.categoryName}>
                        Travels
                    </div>
                    <div className={s.timeReading}>
                        25.01.2021
                    </div>
                </div>
                <div className={s.line}/>
            </div>
        </div>
    )
}
