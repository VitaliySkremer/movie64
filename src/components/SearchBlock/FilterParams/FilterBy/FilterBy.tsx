import styles from './FIlterBy.module.scss'
import {CheckBox} from "../../../ui/CheckBox/CheckBox";
import SimpleBar from 'simplebar-react';

interface FilterByProps {
  title: string;
  list: string[];
  className?:string;
}

export const FilterBy = ({title,list,className}:FilterByProps) => {
  return (
    <div className={className}>
      <p className={styles.title}>{title}:</p>
      <SimpleBar className={styles.wrapper}>
        {list.map(genre=>
          <CheckBox key={genre} className={styles.checkbox} title={genre}/>
        )}
      </SimpleBar>
    </div>
  )
}