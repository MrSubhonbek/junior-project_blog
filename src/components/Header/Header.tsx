import React from 'react'
import s from './Header.module.css'
export const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.menu}>Menu</div>
        <div className={s.blog}>Personal Travel Blog</div>
        <div className={s.search}>Search</div>
    </header>
  )
}
