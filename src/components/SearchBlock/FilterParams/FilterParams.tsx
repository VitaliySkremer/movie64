import styles from './FilterParams.module.scss'
import {FilterBy} from "./FilterBy/FilterBy";
import {ListCompanies, ListGenre} from "../../../assets/ListFilters";
import SimpleBar from "simplebar-react";
import {Input} from "../../ui/Input/Input";
export const FilterParams = () => {
  return (
    <SimpleBar className={styles.wrapper}>
      <div className={styles.years}>
        <Input min={1900} max={2050} type='number' placeholder='год'/>
        &nbsp;:&nbsp;
        <Input min={1900} max={2050} type='number' placeholder='год'/>
      </div>
      <FilterBy className={styles.filter} title='Жанры' list={ListGenre}/>
      <FilterBy className={styles.filter} title='Компании' list={ListCompanies}/>
    </SimpleBar>
  )
}