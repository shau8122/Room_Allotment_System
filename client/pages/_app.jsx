import StudentState from '@/context/students/StudentState'
import AdminState from '@/context/admins/AdminState'
import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

export default function App({Component, pageProps }) {
  return <AdminState><StudentState><Component {...pageProps} /></StudentState></AdminState>
}
