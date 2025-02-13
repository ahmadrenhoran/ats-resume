import { defineStore } from "pinia";

export const useSectionStore = defineStore('adds_section', {
    state: () => ({
        selectLangSection: false,
        selectHardSklSection: false,
        selectSoftSklSection: false,
        selectCertSection: false,
        selectSocialSection: false,
    }),
    actions: {
        toggleSection(section) {
            this[section] = !this[section];
        }
    }
});
