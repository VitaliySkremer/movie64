import {ReactNode} from "react";
import styles from './Card.module.scss'

interface ICardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({children,className}:ICardProps) => {
  return (
    <div className={[styles.card,className].join(' ')}>
      {children}
    </div>
  )
}