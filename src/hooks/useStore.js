import { create } from 'zustand'

export const useStoreCheckbox = create((set) => ({
  checkboxIds: [],
  toggleCheckbox: (id) => set((state) => ({ checkboxIds: toggleCheckboxId(state.checkboxIds, id) })),
  resetCheckboxes: () => set({ checkboxIds: [] }),
}));

const toggleCheckboxId = (checkboxIds, id) => {
  if (isNaN(id)) {
    return checkboxIds
  }

  const index = checkboxIds.indexOf(id)

  if (index === -1) {
    return [...checkboxIds, id]
  } else {
    return checkboxIds.filter((checkboxId) => checkboxId !== id)
  }
}
export const useStoreResetCheckBoxAll = create((set) => ({
  checkbox: false,
  checkboxAdd: () => set(() => ({ checkbox: true })),
  resetCheckbox: () => set({ checkbox: false }),
}))

