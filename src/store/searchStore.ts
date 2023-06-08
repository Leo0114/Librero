import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PreviousAndNextBooksResponse } from "../types";

interface BearState {
  isLoading: boolean;
  setIsLoading: (isLoadingParam: boolean) => void;
  previousAndNextBooksResponse: PreviousAndNextBooksResponse | object;
  setPreviousAndNextBooksResponse: (
    previousAndNextBooksResponseParam: PreviousAndNextBooksResponse | object
  ) => void;

  searchInput: string;
  setSearchInput: (inputParam: string) => void;
}

export const useSearchStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        // Our actual state gets defined here, add a value and a function to update it
        isLoading: false,
        setIsLoading: (isLoadingParam) =>
          set(() => ({ isLoading: isLoadingParam })),

        searchInput: "",
        setSearchInput: (inputParam) => {
          set(() => ({ searchInput: inputParam }));
        },

        previousAndNextBooksResponse: {},
        setPreviousAndNextBooksResponse: (
          previousAndNextBooksResponseParam
        ) => {
          set(() => ({
            previousAndNextBooksResponse: previousAndNextBooksResponseParam,
          }));
        },
      }),
      {
        name: "search-storage",
      }
    )
  )
);
