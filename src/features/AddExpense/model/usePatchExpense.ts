import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchExpense } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types'

export const usePatchExpense = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: patchExpense,
      // onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ['expenses'], exact: false })
      // } с рефетчем.

      onSuccess: updatedExpense => {
         queryClient.setQueriesData(
            { queryKey: ['expenses'], exact: false },
            (oldData: Expense[] | undefined) => {
               if (!oldData) return []
               return oldData.map(exp =>
                  exp.id === updatedExpense.id ? updatedExpense : exp
               )
            }
         )
      },
   })
}
