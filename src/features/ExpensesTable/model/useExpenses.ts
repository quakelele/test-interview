
import { useQuery } from '@tanstack/react-query';
import { getExpenses } from 'entities/Expense/api';
import { Expense } from 'entities/Expense/types';
import { useState } from 'react';
import { categories } from 'shared/utils/categories';

export const useExpenses = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); 

    const { data, ...rest } = useQuery<Expense[]>({
        queryKey: ['expenses'],
        queryFn: getExpenses,
    });


    const filteredData = selectedCategory
        ? data?.filter((expense) => expense.category === selectedCategory)
        : data;


    const sortedData = filteredData
        ? [...filteredData].sort((a, b) => {
              const dateA = new Date(a.date).getTime();
              const dateB = new Date(b.date).getTime();
              return sortOrder === 'asc' ? dateA - dateB : dateB - dateA; 
          })
        : filteredData;

    return {
        data: sortedData,
        selectedCategory,
        setSelectedCategory,
        categories: categories.map((cat) => cat.category),
        sortOrder,
        setSortOrder,
        ...rest,
    };
};