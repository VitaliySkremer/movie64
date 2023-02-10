import styles from './Header.module.scss'
import { useEffect, useState} from "react";
import {IconsList} from "../ui/Icons/iconsList";
import {Icons} from "../ui/Icons/Icons";
import {Link} from "react-router-dom";

interface IListMenu {
  svg:IconsList;
  bg: string;
  link:string;
}

const listMenu:IListMenu[] = [
  {
    svg:IconsList.Cup,
    bg:"#00fecf",
    link: '/'
  },
  {
    svg:IconsList.STAR,
    bg:"#007dfe",
    link: '/'
  },
  {
    svg:IconsList.SEARCH,
    bg:"#00ff9c",
    link: '/'
  },
  {
    svg:IconsList.About,
    bg:"#a500ff",
    link: '/about'
  },
]

export const Header = () => {
  const [active, setActive] = useState(0)
  const [pos, setPos] = useState(0)

  useEffect(()=>{
    const offset = document.querySelector(`.${styles.active}`)?.getBoundingClientRect()
    if(offset){
      setPos(offset.y + offset.height/2 - 50);
    }
  },[active])

  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        {listMenu.map((item,index)=>
          <Link to={item.link}
                key={index}
                style={{'--bg-menu':item.bg} as React.CSSProperties}
                onClick={()=>setActive(index)}
                className={[styles.menu__item,active===index?styles.active:''].join(' ')}>
            <Icons icon={item.svg}/>
          </Link>
        )}
        <div style={{transform:`translateY(${pos}px`}} className={styles.border}/>
      </div>
    </header>
  )
}