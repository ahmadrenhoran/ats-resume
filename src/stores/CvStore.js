import { defineStore } from "pinia";

export const useCvStore = defineStore('cv', {
    state: () => ({
        personalDetails: {
            jobTitle: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            country: '',
            bio: '',
        },
        experiences: [
            {
                title: '',
                company: '',
                startDate: '',
                endDate: '',
                city: '',
                country: '',
                description: '',
            }
        ],
        educations: [
            {
                school: '',
                major: '',
                degree: '',
                startDate: '',
                endDate: '',
                city: '',
                country: '',
                description: ''
            }
        ],
        langSkills: [
            {
                name: "",
                level: "",
            },
        ], hardSkills: [
            {
                name: "",
                level: "",
            },
        ],
        softSkills: [
            {
                name: "",
                level: "",
            },
        ],
        certSkills: [
            {
                name: "",
                level: "",
            },
        ],
        socialSkills: [
            {
                name: "",
                level: "",
            },
        ],
    }),
    actions: {
        setPersonalData(data) {
            Object.assign(this.personalDetails, data);
        },
        clearPersonalData() {
            this.personalDetails = {
                jobTitle: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                city: '',
                country: '',
                bio: '',
            };
        },
        addExp() {
            this.experiences.push({
                title: '',
                company: '',
                startDate: '',
                endDate: '',
                city: '',
                country: '',
                description: '',
            });
        },
        deleteExp(index) {
            this.experiences.splice(index, 1);
        },
        addEdu() {
            this.educations.push({
                school: '',
                major: '',
                degree: '',
                startDate: '',
                endDate: '',
                city: '',
                country: '',
                description: ''
            });
        },
        deleteEdu(index) {
            this.educations.splice(index, 1);
        },
        resetSkill(skillType) {
            const defaultValues = {
                langSkills: [{ name: "", level: "" }],
                hardSkills: [{ name: "", level: "" }],
                softSkills: [{ name: "", level: "" }],
                certSkills: [{ name: "", level: "" }],
                socialSkills: [{ name: "", level: "" }],
            };
        
            if (skillType && defaultValues[skillType]) {
                this[skillType] = defaultValues[skillType];
            }
        }        
    }
});
