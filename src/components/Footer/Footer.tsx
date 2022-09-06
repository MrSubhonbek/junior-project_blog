import React from 'react'
import s from './Footer.module.css'
export const Footer = () => {
  return (
    <footer className={s.footer}>
        <div className={s.text}>
            <div className={s.title}>Personal Travel</div>
            <div className={s.copyright}>Copyright 2022 All Right Reserved</div>
        </div>
        <div className={s.buttons}>
            <button className={s.home}>Home</button>
            <button className={s.about}>About me</button>
            <button className={s.contacts}>Contacts</button>
        </div>
    </footer>
  )
}
