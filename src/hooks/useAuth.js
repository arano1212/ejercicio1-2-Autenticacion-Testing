import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

export function useAuthContext () {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext debe del provedor AuthPrivider')
  }
  return context
}
