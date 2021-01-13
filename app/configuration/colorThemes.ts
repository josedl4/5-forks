import { THEMES } from "./constants";

export type ColorsTheme = {
    background: string,
    border: string,
    card: string,
    primary: string,
    default: string,
    error: string,
    notification: string,
    text: string,
    textDefault: string
}

// Light theme colors
export const lightColors: ColorsTheme = {
    background: '#f2f2f2',
    border: '#FFFFFF',
    card: '#00a680',
    primary: '#00a680',
    default: '#FFFFFF',
    error: '#D32F2F',
    notification: '#FFFFFF',
    text: '#121212',
    textDefault: '#00a680'
};

// Dark theme colors
export const darkColors: ColorsTheme = {
    background: '#121212',
    border: '#121212',
    card: '#00a680',
    error: '#EF9A9A',
    primary: '#00a680',
    default: '#121212',
    notification: '#121212',
    text: '#FFFFFF',
    textDefault: '#00a680'
};

export const colorThemes = {
    [THEMES.dark]: darkColors,
    [THEMES.light]: lightColors,
    default: lightColors
}