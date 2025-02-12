import { defineStore } from "pinia";

export const useCvStore = defineStore ('cv', {
    state: () => {
        cv: null
    },
    actions:  {
        setCvData(data) {
            this.cv = data;
        },
        clearCvData() {
            this.cv = null;
        }
    }
})
