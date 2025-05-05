import { formatDate } from 'shared/utils/formatDate'
import { formatAmount } from 'shared/utils/formatAmount'
import { Expense } from 'entities/Expense/types'
import edit from 'shared/assets/edit-2.png'
import remove from 'shared/assets/bag-2.png'
import { useDeleteExpense } from 'features/AddExpense/model/useDeleteExpense'
import { useState } from 'react'
import style from '../styles/styles.module.scss'
import { usePatchExpense } from 'features/AddExpense/model/usePatchExpense'

type Props = {
   item: Expense
}

export const TableRow = ({ item }: Props) => {
   const { mutate: deleteExpense } = useDeleteExpense()
   const { mutate: patchExpense } = usePatchExpense()
   const [editTitle, setEditTitle] = useState<number | null>(null)
   const [inputValue, setInputValue] = useState(item.description)

   const editHandler = (id: number) => {
      setEditTitle(id)
   }

   const saveButtonHandler = () => {
      const newObj = { ...item, description: inputValue }
      patchExpense(newObj, {
         onSuccess: () => setEditTitle(null),
      })
   }

   return (
      <tr>
         <td>
            {item.id === editTitle ? (
               <div className={style.editBlock}>
                  <input
                     value={inputValue}
                     onChange={e => setInputValue(e.target.value)}
                     type="text"
                  />
                  <div>
                     <button onClick={saveButtonHandler}>save</button>{' '}
                     <button onClick={() => setEditTitle(null)}>cancel</button>
                  </div>
               </div>
            ) : (
               ''
            )}

            {item.description}
         </td>
         <td>{item.category}</td>
         <td>{formatDate(item.date)}</td>
         <td>{formatAmount(item.amount)}</td>
         <td>
            <button onClick={() => editHandler(item.id)}>
               <img src={edit} width={12} height={12} alt="edit" />
            </button>
            <button onClick={() => deleteExpense(item.id)}>
               <img src={remove} width={12} height={12} alt="remove" />
            </button>
         </td>
      </tr>
   )
}
