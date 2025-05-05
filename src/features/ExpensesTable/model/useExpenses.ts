import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { getExpenses } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types'
import { useState } from 'react'
import { categories as allCategories } from 'shared/utils/categories'

type UseExpensesResult = {
   data: Expense[]
   selectedCategory: string | null
   setSelectedCategory: (category: string | null) => void
   sortOrder: 'asc' | 'desc'
   setSortOrder: (order: 'asc' | 'desc') => void
   categories: string[]
} & Omit<UseQueryResult<Expense[], unknown>, 'data'>

export const useExpenses = (): UseExpensesResult => {
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
   const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

   const query = useQuery<Expense[], unknown>({
      queryKey: ['expenses', selectedCategory, sortOrder],
      queryFn: () => getExpenses(selectedCategory, sortOrder),
      staleTime: 10000, 
      
   })

   const { data: _omitData, ...queryWithoutData } = query

   return {
      data: query.data || [],
      selectedCategory,
      setSelectedCategory,
      sortOrder,
      setSortOrder,
      categories: allCategories.map(c => c.category),
      ...queryWithoutData,
   }
}
