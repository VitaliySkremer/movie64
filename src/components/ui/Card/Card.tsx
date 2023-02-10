import {ReactNode} from "react";
import styles from './Card.module.scss'

interface ICardProps {
  children: ReactNode
}

export const Card = ({children}:ICardProps) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}