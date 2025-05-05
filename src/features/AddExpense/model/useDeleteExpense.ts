import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteExpense } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types'

export const useDeleteExpense = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: deleteExpense,
      // onSuccess: () => {
      //    queryClient.invalidateQueries({ queryKey: ['expenses'], exact: false })
      // },  // с рефетчем

      onSuccess: (deletedId) => {
         queryClient.setQueriesData(
           { queryKey: ['expenses'], exact: false },
           (oldExpenses: Expense[] | undefined) => {
             if (!oldExpenses) return []
             return oldExpenses.filter((expense) => expense.id !== deletedId)
           }
         )
       } // без рефетча
       

   })
}

