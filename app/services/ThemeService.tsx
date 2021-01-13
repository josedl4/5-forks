import { ColorsTheme, colorThemes, darkColors, lightColors } from "../configuration/colorThemes";
import { THEMES } from "../configuration/constants";


export interface IThemeService {
    theme: THEMES,
    getColorTheme: () => ColorsTheme
    setColorTheme: (theme: THEMES) => void
}

export class ThemeService implements IThemeService {

    theme: THEMES = THEMES.light;
    private static instance: IThemeService

    public static getInstance = (): IThemeService => {
        if (!ThemeService.instance) { ThemeService.instance = new ThemeService() }
        return ThemeService.instance;
    }

    public setColorTheme = (theme: THEMES) => this.theme = theme;

    public getColorTheme = (): ColorsTheme => {
        return colorThemes[this.theme] ? colorThemes[this.theme] : colorThemes.default;
    }
}
