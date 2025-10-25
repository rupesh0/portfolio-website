import * as EnglishTexts from "./texts/english.js";
import * as hindiTexts from "./texts/hindi.js";
import * as spanishTexts from "./texts/spanish.js";

const getBrowserLanguage = () => {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith("hi")) return "hindi"; // Hindi
    if (lang.startsWith("es")) return "spanish"; // Spanish
    return "english"; // default English
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

const {
    HEADER_TEXTS,
    HOME_TEXTS,
    ABOUT_ME_TEXTS,
    WORK_EXPERIENCE_TEXTS,
    CREDENTIAL_TEXTS,
    CONTACT_TEXTS,
    FOOTER_TEXTS,
} = getTexts(getBrowserLanguage());

export {
    HEADER_TEXTS,
    HOME_TEXTS,
    ABOUT_ME_TEXTS,
    WORK_EXPERIENCE_TEXTS,
    CREDENTIAL_TEXTS,
    CONTACT_TEXTS,
    FOOTER_TEXTS,
};
