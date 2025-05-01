import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteExpense } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types'

export const useDeleteExpense = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: deleteExpense,
      onSuccess: deletedId =>
         queryClient.setQueryData(['expenses'], (oldExpenses: Expense[]) =>
            oldExpenses
               ? oldExpenses.filter((todo) => todo.id !== deletedId)
               : []
         ),
   })
}
