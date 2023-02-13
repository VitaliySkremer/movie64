import styles from './InputSerach.module.scss'
import {Input} from "../../ui/Input/Input";
import {FilmsSearch} from "../../FilmsList/FilmsSearch/FilmsSearch";

export const InputSearch = () => {
  return (
    <div className={styles.wrapper}>
      <Input placeholder='Search'/>
      <FilmsSearch/>
    </div>
  )
}