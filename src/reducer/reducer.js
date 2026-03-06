import React from "react";  
import { FORM_DATA, EDUCATION_DATA, EXPERIENCE_DATA, SKILLS_DATA, SELECTED_TEMPLATE, SAVE_RESUME } from "../action/actionType";
const inistialState = {
    PersonalInfo : [],
    Education : [],
    Experience : [],
    Skills : [],
    selectedTemplate : null,
    savedResumes : []
}   

const reducer = (state = inistialState, action) => {
    switch (action.type) {
        case FORM_DATA:
            return {
                ...state,
                PersonalInfo : [...state.PersonalInfo, action.payload]
            }
        case EDUCATION_DATA:
            return {
                ...state,
                Education : [...state.Education, action.payload]
            }
        case EXPERIENCE_DATA:
            return {
                ...state,
                Experience : [...state.Experience, action.payload]
            }
        case SKILLS_DATA:
            return {
                ...state,
                Skills : [...state.Skills, action.payload]
            }
        case SELECTED_TEMPLATE:
            return {
                ...state,
                selectedTemplate : action.payload
            }
        case SAVE_RESUME:
            return {
                ...state,
                savedResumes : [...state.savedResumes, action.payload]
            }   
        default:
            return state;
    }
}

export default reducer;