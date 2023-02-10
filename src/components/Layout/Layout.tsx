import styles from './Layout.module.scss'
import {useEffect, useState} from "react";

interface ILayoutProps {
  children:React.ReactNode;
  bg:string;
}

export const Layout = ({children, bg}:ILayoutProps) => {
  const [isActive, setIsActive] = useState(false);
  const classStyle = {
    padding: "50px 50px",
    background: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .5)),
    url("${bg}") top/cover no-repeat`,
    height: "100%",
    transition: "background-position 1s ease",
  }
  useEffect(()=>{
    setIsActive(true);
  },[])
  return (
    <div style={classStyle} className={isActive?styles.layout:''}>
      {children}
    </div>
  )
}