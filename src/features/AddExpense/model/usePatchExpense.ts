import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchExpense } from 'entities/Expense/api'

export const usePatchExpense = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: patchExpense,
      onSuccess: (updatedExpense) => {
        queryClient.setQueryData(['expenses'], (oldExpenses: any) => {
          if (!oldExpenses) return [];
          return oldExpenses.map((exp: any) =>
            exp.id === updatedExpense.id ? updatedExpense : exp
          );
        });
      },
    });
  };
  