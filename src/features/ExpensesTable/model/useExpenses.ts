
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { getExpenses } from 'entities/Expense/api'
import { Expense } from 'entities/Expense/types'
import { useState, useMemo } from 'react'
import { categories as allCategories } from 'shared/utils/categories'
import { filterExpensesByCategory, sortExpensesByDate } from 'shared/lib'

const EXPENSES_QUERY_KEY = ['expenses']

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
      queryKey: EXPENSES_QUERY_KEY,
      queryFn: getExpenses,
   })

   const data = useMemo(() => {
      if (!query.data) return []
      const filtered = filterExpensesByCategory(query.data, selectedCategory)
      return sortExpensesByDate(filtered, sortOrder)
   }, [query.data, selectedCategory, sortOrder])

   const { data: _omitData, ...queryWithoutData } = query 

   return {
      data,
      selectedCategory,
      setSelectedCategory,
      sortOrder,
      setSortOrder,
      categories: allCategories.map(c => c.category),
      ...queryWithoutData, 
   }
}
