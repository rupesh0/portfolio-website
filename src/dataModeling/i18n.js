import * as EnglishTexts from "./texts/english.js";
import * as hindiTexts from "./texts/hindi.js";
import * as spanishTexts from "./texts/spanish.js";

const getBrowserLanguage = () => {
    try {
        const lang = navigator.language || navigator.userLanguage || "";
        if (lang.startsWith("hi")) return "hindi";
        if (lang.startsWith("es")) return "spanish";
    } catch (e) {
        // SSR or test fallback
    }
    return "english";
};

function getTexts(language) {
    switch (language) {
        case "english":
            return EnglishTexts;
        case "hindi":
            return hindiTexts;
        case "spanish":
            return spanishTexts;
        default:
            return EnglishTexts;
    }
}

const activeTexts = getTexts(getBrowserLanguage());

// Fallbacks to English for any missing keys in other language packs
export const HEADER_TEXTS = activeTexts.HEADER_TEXTS || EnglishTexts.HEADER_TEXTS;
export const HOME_TEXTS = activeTexts.HOME_TEXTS || EnglishTexts.HOME_TEXTS;
export const ABOUT_ME_TEXTS = activeTexts.ABOUT_ME_TEXTS || EnglishTexts.ABOUT_ME_TEXTS;
export const SKILLS_TEXTS = activeTexts.SKILLS_TEXTS || EnglishTexts.SKILLS_TEXTS;
export const WORK_EXPERIENCE_TEXTS = activeTexts.WORK_EXPERIENCE_TEXTS || EnglishTexts.WORK_EXPERIENCE_TEXTS;
export const PROJECTS_TEXTS = activeTexts.PROJECTS_TEXTS || EnglishTexts.PROJECTS_TEXTS;
export const ACHIEVEMENTS_TEXTS = activeTexts.ACHIEVEMENTS_TEXTS || EnglishTexts.ACHIEVEMENTS_TEXTS;
export const CREDENTIAL_TEXTS = activeTexts.CREDENTIAL_TEXTS || EnglishTexts.CREDENTIAL_TEXTS;
export const CONTACT_TEXTS = activeTexts.CONTACT_TEXTS || EnglishTexts.CONTACT_TEXTS;
export const FOOTER_TEXTS = activeTexts.FOOTER_TEXTS || EnglishTexts.FOOTER_TEXTS;
