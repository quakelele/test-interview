import { useState } from 'react'
import { Categories } from './ui/Categories'
import { usePostExpense } from './model/usePostExpense'
import { Expense } from 'entities/Expense/types'

import styles from './styles/styles.module.scss'

export const AddExpense = () => {
   const [selectedCategory, setSelectedCategory] = useState('')
   const { mutate: addExpense } = usePostExpense()



   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries()) as unknown as Expense
      addExpense(data)
      ;(e.target as HTMLFormElement).reset()
      setSelectedCategory('')
   }
   return (
      <form  onSubmit={onSubmit} className={styles.wrapper}>
         <h2>Новый расход</h2>
         <div className={styles.description}>
            <h3>Описание</h3>
            <input
               name="description"
               placeholder="Введите описание"
               type="text"
            />
            <input type="hidden" name="category" value={selectedCategory} />
         </div>
         <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
         />
         <div className={styles.date}>
            <h3>Дата</h3>
            <input type="date" name="date" placeholder="Введите дату" />
         </div>
         <div className={styles.amount}>
            <h3>Сумма</h3>
            <input type="number" name="amount" placeholder="Введите сумму" />
         </div>
         <button type="submit" className={styles.button}>
            Добавить новый расход
         </button>
      </form>
   )
}
