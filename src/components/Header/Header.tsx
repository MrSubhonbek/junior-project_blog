import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Endpoints } from '../../shared/constants';
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import s from './Header.module.css'
export const Header = () => {
  const navigate = useNavigate();
  const clickMenuHandler = () => {
    navigate(Endpoints.Home)
  }
  return (
    <header className={s.header}>
      <div className={s.menu} onClick={clickMenuHandler}><AiOutlineMenu/></div>
      <div className={s.blog}>Personal Travel Blog</div>
      <div className={s.search}><AiOutlineSearch/></div>
    </header>
  )
}
