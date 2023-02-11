import {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children:ReactNode;
  className?:string
  size?: 'small'|'full'
}

export const Button = ({size='small',children,className,...other}:IButtonProps) => {

  const Size = size=== 'small'? styles.small:styles.full

  return (
    <button className={[styles.button,className, Size].join(' ')} {...other}>
      {children}
    </button>
  )
}