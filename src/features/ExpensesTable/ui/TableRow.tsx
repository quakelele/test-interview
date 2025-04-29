import { formatDate } from 'shared/utils/formatDate'
import { formatAmount } from 'shared/utils/formatAmount'
import { Expense } from 'entities/Expense/types'
import edit from 'shared/assets/edit-2.png'
import remove from 'shared/assets/bag-2.png'
import { useDeleteExpense } from 'features/AddExpense/model/useDeleteExpense'
type Props = {
   item: Expense
}

export const TableRow = ({ item }: Props) => {
   const { mutate: deleteExpense } = useDeleteExpense()

   return (
      <tr>
         <td>{item.description}</td>
         <td>{item.category}</td>
         <td>{formatDate(item.date)}</td>
         <td>{formatAmount(item.amount)}</td>
         <td>
            <button>
               <img src={edit} width={12} height={12} alt="edit" />
            </button>
            <button onClick={() => deleteExpense(item.id)}>
               <img src={remove} width={12} height={12} alt="remove" />
            </button>
         </td>
      </tr>
   )
}
