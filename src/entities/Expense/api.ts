
import { Expense } from './types';
import { api } from 'shared/api/base'

export const getExpenses = () => api.get('expenses');
export const postExpense = (data: Expense) => api.post('expenses', data);
export const deleteExpense = (id: number) => api.delete(`expenses/${id}`).then(() => id);
export const putExpense = (data: Expense) => api.put(`expenses/${data.id}`, data);