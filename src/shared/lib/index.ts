import { Expense } from 'entities/Expense/types';

export const filterExpensesByCategory = (expenses: Expense[], category: string | null): Expense[] =>
    category ? expenses.filter(e => e.category === category) : expenses;

export const sortExpensesByDate = (expenses: Expense[], order: 'asc' | 'desc'): Expense[] =>
    [...expenses].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
