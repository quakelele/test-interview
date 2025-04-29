import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteExpense } from 'entities/Expense/api'

export const useDeleteExpense = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: deleteExpense,
      onSuccess: deletedId =>
         queryClient.setQueryData(['expenses'], (oldExpenses: any) =>
            oldExpenses
               ? oldExpenses.filter((todo: any) => todo.id !== deletedId)
               : []
         ),
   })
}
