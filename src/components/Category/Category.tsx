import React from 'react'
import { Card } from '../Card/Card'
import s from './Category.module.css'
export const Category = () => {
    const category = ['Travels', 'Foods', 'Guides', 'Stories','Cities', 'Countries', 'Blogs']
    const cards = category.map(element=>{return (
        <Card title={element}/>
    )
    })
  return (
    <React.StrictMode>
      <div className={s.head}>
        <div className={s.title}>Explore by category</div>
        <div className={s.buttons}>
            <button className={s.prevButton}>prev</button>
            <button className={s.nextButton}>next</button>
        </div>
      </div>
      <div className={s.cards}>
        {cards}
      </div>
    </React.StrictMode>
  )
}