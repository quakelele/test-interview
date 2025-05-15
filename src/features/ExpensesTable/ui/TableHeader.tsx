import { useState, useRef, useEffect } from 'react'
import { CategoryFilterDropdown } from './CategoryFilterDropdown'
import styles from '../styles/styles.module.scss'

type Props = {
   selectedCategory: string | null
   setSelectedCategory: (category: string | null) => void
   categories: string[]
   sortOrder: 'asc' | 'desc'
   setSortOrder: (order: 'asc' | 'desc') => void
}

export const TableHeader = ({
   selectedCategory,
   setSelectedCategory,
   categories,
   sortOrder,
   setSortOrder,
}: Props) => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
   const filterRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            filterRef.current &&
            !filterRef.current.contains(event.target as Node)
         ) {
            setIsDropdownOpen(false)
         }
      }

      if (isDropdownOpen) {
         document.addEventListener('mousedown', handleClickOutside)
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [isDropdownOpen])

   const handleSort = () => {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
   }

   return (
      <div className={styles.top}>
         <h2>Таблица Расходов</h2>
         <div className={styles.filterWrapper} ref={filterRef}>
            <button
               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
               style={{ cursor: 'pointer' }}>
               Фильтровать по категории: <b>{selectedCategory || 'Все'}</b>
            </button>
            {isDropdownOpen && (
               <CategoryFilterDropdown
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  onClose={() => setIsDropdownOpen(false)}
               />
            )}
         </div>
         <button onClick={handleSort}>
            Сортировать по <b>дате</b> {sortOrder === 'asc' ? '▲' : '▼'}
         </button>
      </div>
   )
}
