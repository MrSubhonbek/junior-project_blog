import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Endpoints } from '../../../shared/constants';
import { DescriptionsType } from '../../../store/interface'
import s from './InfoMain.module.css'

export const InfoMain: React.FC<DescriptionsType> = ({ action, title, shortText }) => {
    const navigate = useNavigate();

    const clickArticleHandler = () => {
        navigate(Endpoints.Article + '/0')
    }
    return (
        <React.StrictMode>
            <div className={s.wrapper}>
                <div className={s.box}>
                    <div className={s.action}>{action}</div>
                    <div className={s.title}>{title}</div>
                    <div className={s.description}>{shortText}</div>
                    <button className={s.button} onClick={clickArticleHandler}>Read more</button>
                </div>
                <div className={s.wrapperButton}>
                    <button className={s.prevButton}>prev</button>
                    <button className={s.nextButton}>next</button>
                </div>
            </div>
        </React.StrictMode>
    )
}
