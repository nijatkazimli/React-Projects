import { create } from 'zustand'
import { fetchLanguage as fetchLanguageApi, setLanguage as setLanguageApi } from "../logic/api";
const languageStore = create((set) => ({
    language: "en-US",
    setLanguage: async (newLanguage) => {
        await setLanguageApi(newLanguage);
        set({ language: newLanguage });
    },
    fetchLanguage: async () => {
        const fetchedLanguage = await fetchLanguageApi();
        set({ language: fetchedLanguage });
    },
}));

export default languageStore;