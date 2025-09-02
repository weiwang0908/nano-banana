import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true })
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Mock user data
          const user: User = {
            id: '1',
            name: 'John Doe',
            email: email,
            avatar: '/api/placeholder/40/40',
            createdAt: new Date().toISOString()
          }
          
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false 
          })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      signup: async (name: string, email: string, password: string) => {
        set({ isLoading: true })
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Mock user data
          const user: User = {
            id: '1',
            name: name,
            email: email,
            avatar: '/api/placeholder/40/40',
            createdAt: new Date().toISOString()
          }
          
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false 
          })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false 
        })
      },

      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({ 
            user: { ...currentUser, ...userData } 
          })
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
)
