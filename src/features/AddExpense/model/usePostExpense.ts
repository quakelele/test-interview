import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postExpense } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types'

export const usePostExpense = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: postExpense,

      onSuccess: newExpense => {
         queryClient.setQueriesData(
            { queryKey: ['expenses'], exact: false },
            (oldExpenses: Expense[] | undefined) => {
               if (!oldExpenses) return [newExpense]
               return [newExpense, ...oldExpenses]
            }
         )
      },
      //   onSuccess: () =>
      //      queryClient.invalidateQueries({
      //         queryKey: ['expenses'],
      //         exact: false,
      //      }), // с рефетчем

      // onSuccess: (newExpense) =>
      //     queryClient.setQueryData(['expenses'], (oldExpenses: Expense[]) => [
      //         newExpense,
      //         ...oldExpenses,
      //     ]),
   })
}
