import { create } from 'zustand'

interface uiState {
  mobileMenu: boolean
  toggleMobileMenu: () => void
}

export const useUIStore = create<uiState>((set) => ({
  mobileMenu: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),
}))
