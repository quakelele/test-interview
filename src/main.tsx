import { createRoot } from 'react-dom/client'
import 'styles/global.module.scss' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from 'app/App.tsx' 

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
   <QueryClientProvider client={queryClient}>
      <App />
   </QueryClientProvider>
)
