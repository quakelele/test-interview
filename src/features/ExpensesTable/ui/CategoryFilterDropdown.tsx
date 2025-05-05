import styles from '../styles/CategoryFilterDropdown.module.scss'
import { AnimatePresence, motion } from 'motion/react'
type Props = {
   categories: string[]
   selectedCategory: string | null
   setSelectedCategory: (category: string | null) => void
   onClose: () => void
}

export const CategoryFilterDropdown = ({
   categories,
   selectedCategory,
   setSelectedCategory,
   onClose,
}: Props) => {
   return (
      <AnimatePresence >
         <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            className={styles.dropdown}>
            <ul>
               <li
                  className={selectedCategory === null ? styles.active : ''}
                  onClick={() => {
                     setSelectedCategory(null)
                     onClose()
                  }}>
                  Bce категории
               </li>
               {categories.map(category => (
                  <li
                     key={category}
                     className={
                        selectedCategory === category ? styles.active : ''
                     }
                     onClick={() => {
                        setSelectedCategory(category)
                        onClose()
                     }}>
                     {category}
                  </li>
               ))}
            </ul>
         </motion.div>
      </AnimatePresence>
   )
}
