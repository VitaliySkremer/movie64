import {Card} from "../ui/Card/Card";
import styles from './SearchBlock.module.scss'
import {FilterParams} from "./FilterParams/FilterParams";
import {InputSearch} from "./InputSearch/InputSearch";

export const SearchBlock = () => {
  return (
    <Card className={styles.wrapper}>
      <InputSearch/>
      <FilterParams/>
    </Card>
  )
}