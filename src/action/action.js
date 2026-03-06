import { FORM_DATA , EDUCATION_DATA, EXPERIENCE_DATA, SKILLS_DATA, SELECTED_TEMPLATE, SAVE_RESUME } from "./actionType";

export const onSubmitFormData = (formData) => {
    return {
        type : FORM_DATA,
        payload : formData
    }
}

export const onSubmitEducationData = (educationData) => {
    return {
        type : EDUCATION_DATA,
        payload : educationData
    }
}       

export const onSubmitExperienceData = (experienceData) => { 
    return {
        type : EXPERIENCE_DATA,
        payload : experienceData
    }
}   

export const onSubmitSkillsData = (skillsData) => {     
    return {
        type : SKILLS_DATA,
        payload : skillsData
    }
}

export const setSelectedTemplate = (templateData) => {
    return {
        type : SELECTED_TEMPLATE,
        payload : templateData
    }
}

export const saveResume = (resumeData) => {
    return {
        type : SAVE_RESUME,
        payload : resumeData
    }
}       

