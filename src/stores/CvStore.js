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

// import { defineStore } from "pinia";

// export const useCvStore = defineStore ('cv', {
//     state: () => {
//         personalDetails: null;
//         educations: null;
//         experiences: null;
//         languages: null
//         hardSkills: null;
//         softSkills: null;
//         certs: null;
//         socials: null;

//     },
//     actions:  {
//         setPersonalDetailsData(data) {
//             this.personalDetails = data;
//         },
//         clearPersonalDetailsData() {
//             this.personalDetails = null;
//         }
//     }
// })