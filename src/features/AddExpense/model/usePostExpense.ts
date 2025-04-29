import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postExpense } from 'entities/Expense/api';


export const usePostExpense = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postExpense,
        onSuccess: (newExpense) =>
            queryClient.setQueryData(['expenses'], (oldExpenses: any) => [
                newExpense,
                ...oldExpenses,
            ]),
    });
};