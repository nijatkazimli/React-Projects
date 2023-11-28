import { create } from 'zustand'
import { fetchLanguage as fetchLanguageApi, setLanguage as setLanguageApi } from "../redux/api";
const languageStore = create((set) => ({
    language: "en-US",
    setLanguage: async (newLanguage) => {
        await setLanguageApi(newLanguage);
        set({ language: newLanguage });
    },
    fetchLanguage: async () => {
        const language = await fetchLanguageApi();
        set({ language });
    },
}));

export default languageStore;