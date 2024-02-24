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

export const useStoreFilterFront = create((set) => ({
  filters: {
    location: 'all',
    current_position: 'all',
    status: "all",
    cuil: 'all',
    has_work_experience: 'all',
    has_own_transport: 'all',
    age: 'all',
    availability_schedule: 'all'
  },
  setFilters: (newFilters) => set({ filters: newFilters }),
}))

export const useStoreFilterBackend = create((set) => ({
  // Definir el estado inicial con un objeto
  myFilter: {

  },

  // Función para agregar una propiedad a myObject
  addPropertyToMyFilter: (propertyName, propertyValue) =>
    set((state) => ({
      myFilter: {
        ...state.myFilter,
        [propertyName]: propertyValue,
      },
    })),
  deletePropertyFromMyFilter: (propertyName) =>
    set((state) => {
      // eslint-disable-next-line no-unused-vars
      const { [propertyName]: _, ...rest } = state.myFilter; // Desestructurar y omitir la propiedad
      return { myFilter: rest };
    }),
  deleteFilters: () => set({ myFilter: {} }),

}));

export const useStorePhoneNumber = create((set) => ({
  phoneNumber: null,
  setPhoneNumber: (newPhoneNumber) => set({ phoneNumber: newPhoneNumber }),
}));
export const useStoreCuil = create((set) => ({
  cuil: null,
  setCuil: (cuil) => set({ cuil: cuil }),
}));
export const useStoreLocation = create((set) => ({
  location: null,
  setLocation: (location) => set({ location: location }),
}))

export const useStoreDeleteCandidate = create((set)=> ({
  isDeleteId: null,
  setIsDeleteId: (isDeleteId) => set({isDeleteId: isDeleteId})
}))
export const useCandidateStore = create((set) => ({
  selectedCandidateId: null,
  setSelectedCandidateId: (id) => set({ selectedCandidateId: id }),
}));