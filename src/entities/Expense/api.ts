import { Expense } from './types'
import { api } from 'shared/api/base'

export const getExpenses = (category: string | null = null, sortOrder: 'asc' | 'desc' = 'asc') => {
   const params = new URLSearchParams();
   if (category) params.append('category', category); 
   params.append('_sort', 'date'); 
   params.append('_order', sortOrder); 

   return api.get(`expenses?${params.toString()}`);
};

export const postExpense = (data: Expense) => api.post('expenses', data)
export const deleteExpense = (id: number) =>
   api.delete(`expenses/${id}`).then(() => id)
export const putExpense = (data: Expense) =>
   api.put(`expenses/${data.id}`, data)
export const patchExpense = (data: Expense) =>
   api.patch(`expenses/${data.id}`, data)
