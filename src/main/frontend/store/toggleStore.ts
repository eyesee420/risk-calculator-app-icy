import { create } from 'zustand'


interface BearState {
  theme: string
  toggleTheme: () => void
}

const useToggleStore = create<BearState>((set) => ({

    theme: 'dark',
    toggleTheme: () =>
      set((state) =>
        { 
            document.documentElement.setAttribute('theme', state.theme);
          return ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
        
      }
    
    )   }
    
    ),

  }));
  
export default useToggleStore;