import styles from './FilterParams.module.scss'
import {FilterBy} from "./FilterBy/FilterBy";
import {ListCompanies, ListGenre} from "../../../assets/ListFilters";
import SimpleBar from "simplebar-react";

export const FilterParams = () => {
  return (
    <SimpleBar className={styles.wrapper}>
      <FilterBy className={styles.filter} title='Жанры' list={ListGenre}/>
      <FilterBy className={styles.filter} title='Компании' list={ListCompanies}/>
    </SimpleBar>
  )
}