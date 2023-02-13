import {InputHTMLAttributes} from "react";
import styles from './CheckBox.module.scss'
interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
  title:string;
  className?: string;
}

export const CheckBox = ({title,className, ...other}:CheckBoxProps) => {
  return (
    <label className={[styles.label,className].join(' ')}>
      <input className={styles.input} type="checkbox" {...other}/>
      <span className={styles.title}>
        {title}
      </span>
    </label>
  )
}