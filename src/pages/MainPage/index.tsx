import { Table } from 'features/ExpensesTable'
import styles from './styles/styles.module.scss'
import { AddExpense } from 'features/AddExpense'

export const MainPage = () => {
   return (
      <div className={styles.wrapper}>
         <Table />
         <AddExpense />
      </div>
   )
}
