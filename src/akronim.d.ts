/**
 * @param {string | number} text
 * @param {{
 * ignoreLowercaseWords?: boolean,
 * separateWith?: string | number,
 * trimLastSeparator?: boolean
 * }} options
 * @returns {string}
 * @throws Error
 */
export function akronim(text: string | number, options?: {
    ignoreLowercaseWords?: boolean;
    separateWith?: string | number;
    trimLastSeparator?: boolean;
}): string;
