import { create } from 'zustand'

const languageStore = create((set) => ({
    language: "en-US",
    setLanguage: (newLanguage) => set({ language: newLanguage }),
}));

export default languageStore;