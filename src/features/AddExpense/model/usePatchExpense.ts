import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchExpense } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types';

export const usePatchExpense = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: patchExpense,
      onSuccess: (updatedExpense) => {
        queryClient.setQueryData(['expenses'], (oldExpenses: Expense[]) => {
          if (!oldExpenses) return [];
          return oldExpenses.map((exp) =>
            exp.id === updatedExpense.id ? updatedExpense : exp
          );
        });
      },
    });
  };
  