import { useMutation, useQueryClient } from '@tanstack/react-query'
import { putExpense } from 'entities/Expense/api'

export const usePutExpense = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: putExpense, 
    //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ['expenses'] }), // с рефетчем на сервак

    onSuccess: (updatedExpense) => {
        queryClient.setQueryData(['expenses'], (oldExpenses: any) => {
          if (!oldExpenses) return [];
          return oldExpenses.map((exp: any) =>
            exp.id === updatedExpense.id ? updatedExpense : exp
          );
        });
      }   // без рефетча


   })
}
