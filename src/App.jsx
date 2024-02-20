import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Bookings from './pages/Bookings.jsx'
import Users from './pages/Users'
import Cabins from './pages/Cabins.jsx'
import Settings from './pages/Settings.jsx'
import Account from './pages/Account.jsx'
import Login from './pages/Login.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import AppLayout from './ui/AppLayout.jsx'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import toast, { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to='dashboard' replace />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='cabins' element={<Cabins />} />
            <Route path='users' element={<Users />} />
            <Route path='settings' element={<Settings />} />
            <Route path='account' element={<Account />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ padding: '10px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          }
        }}
      />
    </QueryClientProvider>
  )
}

export default App
