import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Endpoints } from '../../shared/constants';
import s from './Header.module.css'
export const Header = () => {
  const navigate = useNavigate();
  const clickMenuHandler = () => {
    navigate(Endpoints.Home)
  }
  return (
    <header className={s.header}>
      <div className={s.menu} onClick={clickMenuHandler}>Menu</div>
      <div className={s.blog}>Personal Travel Blog</div>
      <div className={s.search}>Search</div>
    </header>
  )
}
