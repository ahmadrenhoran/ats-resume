import { defineStore } from "pinia";

export const useCvStore = defineStore("cv", {
  state: () => ({
    personalDetails: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      bio: "",
    },
    experiences: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        description: "",
      },
    ],
    educations: [
      {
        school: "",
        major: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        description: "",
      },
    ],
    langSkills: [],
    hardSkills: [],
    softSkills: [],
    certSkills: [],
    socialSkills: [],
  }),
  actions: {
    setPersonalData(data) {
      Object.assign(this.personalDetails, data);
    },
    clearPersonalData() {
      this.personalDetails = {
        jobTitle: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        bio: "",
      };
    },
    addExp() {
      this.experiences.push({
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        description: "",
      });
    },
    deleteExp(index) {
      this.experiences.splice(index, 1);
    },
    addEdu() {
      this.educations.push({
        school: "",
        major: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        description: "",
      });
    },
    deleteEdu(index) {
      this.educations.splice(index, 1);
    },
    resetSkill(skillType) {
      const defaultValues = {
        langSkills: [],
        hardSkills: [],
        softSkills: [],
        certSkills: [],
        socialSkills: [],
      };

      if (skillType && defaultValues[skillType]) {
        this[skillType] = defaultValues[skillType];
      }
    },
  },
});
