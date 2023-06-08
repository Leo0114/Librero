import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  paletteMode: "light" | "dark";
  setPaletteMode: (mode: "light" | "dark") => void;
}

export const usePreferencesStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        paletteMode: "dark",
        setPaletteMode: (mode) => set(() => ({ paletteMode: mode })),
      }),
      {
        name: "search-storage",
      }
    )
  )
);
