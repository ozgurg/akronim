const isUppercase = string => string === string.toUpperCase();
const isLowercase = string => string === string.toLowerCase();
const isNumber = value => typeof value === "number";
const isString = value => typeof value === "string";
const isBoolean = value => typeof value === "boolean";
const isStringOrNumber = value => isString(value) || isNumber(value);
const isEmpty = value => value.length === 0;
const splitWords = value => value.split(" ");
const splitLetters = value => value.split("");
const trimLastCharacter = value => value.slice(0, -1);
const isOneWord = words => words.length === 1;

/**
 * @param {string | number} text
 * @param {{
 * ignoreLowercaseWords?: boolean,
 * separateWith?: string | number,
 * trimLastSeparator?: boolean,
 * capitalize?: boolean
 * }} options
 * @returns {string}
 * @throws Error
 */
const akronim = (text, options = {}) => {
    text = validateText(text);

    const {
        ignoreLowercaseWords,
        separateWith,
        trimLastSeparator,
        capitalize
    } = validateOptions(options);

    let acronym = "";

    const words = splitWords(text);
    const letters = splitLetters(text);

    if (isOneWord(words)) {
        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i];

            if (!isUppercase(letter)) continue;

            acronym += letter;
            if (separateWith) {
                acronym += separateWith;
            }
        }
        // No need to capitalize again
        // because we just append capital letters
    } else {
        for (let i = 0; i < words.length; i++) {
            const firstLetterOfWord = words[i][0];

            if (ignoreLowercaseWords && isLowercase(firstLetterOfWord)) continue;

            acronym += firstLetterOfWord;
            if (separateWith) {
                acronym += separateWith;
            }
        }

        if (capitalize) {
            acronym = acronym.toUpperCase();
        }
    }

    if (separateWith && trimLastSeparator) {
        acronym = trimLastCharacter(acronym);
    }

    return acronym;
};

const validateText = text => {
    if (!isStringOrNumber(text)) {
        throw new Error("\"text\" must be a string or a number.");
    }

    text = text.toString().trim();

    if (isEmpty(text)) {
        throw new Error("\"text\" cannot be empty.");
    }

    return text;
};

const validateOptions = ({
    ignoreLowercaseWords = false,
    separateWith = "",
    trimLastSeparator = false,
    capitalize = true
}) => {
    if (!isBoolean(ignoreLowercaseWords)) {
        throw new Error("\"ignoreLowercaseWords\" must be a boolean.");
    }

    if (!isStringOrNumber(separateWith)) {
        throw new Error("\"separateWith\" must be a string or a number.");
    }

    if (!isBoolean(trimLastSeparator)) {
        throw new Error("\"trimLastSeparator\" must be a boolean.");
    }

    if (!isBoolean(capitalize)) {
        throw new Error("\"capitalize\" must be a boolean.");
    }

    separateWith = separateWith.toString().trim();

    return {
        ignoreLowercaseWords,
        separateWith,
        trimLastSeparator,
        capitalize
    };
};

export {
    akronim
};
