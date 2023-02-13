import {InputHTMLAttributes} from "react";
import styles from './Input.module.scss'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  className?: string
  type?:string
}

export const Input = ({type='text',className, ...other}:InputProps) => {
  return (
    <input
      type={type}
      className={[styles.input,className].join(' ')}
      {...other}
    />
  )
}