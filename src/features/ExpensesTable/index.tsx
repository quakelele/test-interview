import { useExpenses } from './model/useExpenses'
import { TableHeader } from './ui/TableHeader'
import { TableRow } from './ui/TableRow'
import styles from './styles/styles.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
export const Table = () => {
   const {
      data,
      selectedCategory,
      setSelectedCategory,
      categories,
      sortOrder,
      setSortOrder,
   } = useExpenses()
   const [parent] = useAutoAnimate()
   return (
      <div className={styles.container}>
         <TableHeader
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
         />
         <div className={styles.bottom}>
            <table className={styles.table}>
               <thead>
                  <tr>
                     <th>Описание</th>
                     <th>Категория</th>
                     <th>Дата</th>
                     <th>Сумма</th>
                     <th>Действия</th>
                  </tr>
               </thead>
               <tbody ref={parent}>
                  {data?.map(item => (
                     <TableRow key={item.id} item={item} />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}
