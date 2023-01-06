import create from "zustand";

const store = (set: Function) => ({

    currentPageNumber: 1,

    updatePageNumber: (newPage: number) => {
        set((state: {newPage: number}) => {
            return {
                ...state,
                currentPageNumber: newPage
            }
        })
    }
});

const useStorage = create(store);
export default useStorage;