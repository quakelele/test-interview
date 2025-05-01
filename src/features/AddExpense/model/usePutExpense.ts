import { useMutation, useQueryClient } from '@tanstack/react-query'
import { putExpense } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types'

export const usePutExpense = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: putExpense, 
    //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ['expenses'] }), // с рефетчем на сервак

    onSuccess: (updatedExpense) => {
        queryClient.setQueryData(['expenses'], (oldExpenses: Expense[]) => {
          if (!oldExpenses) return [];
          return oldExpenses.map((exp) =>
            exp.id === updatedExpense.id ? updatedExpense : exp
          );
        });
      }   // без рефетча


   })
}
