import { create } from "zustand";

interface State {
  isToggleBurgerMenu: boolean;
}

interface Action {
  toggleBurgerMenu: () => void;
}

export const useBurgerMenuStore = create<State & Action>((set) => ({
  isToggleBurgerMenu: false,
  toggleBurgerMenu: () =>
    set((state: State) => ({ isToggleBurgerMenu: !state.isToggleBurgerMenu })),
}));
