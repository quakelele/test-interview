export const formatDate = (date: string) => {
   const formattedDate = new Date(date)
   if (!date) return
   return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
   }).format(formattedDate)
}
