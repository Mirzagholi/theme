import ThemeMode from "../enum/theme";

export interface IPalette {
    mode: ThemeMode;
    primary: Record<string, string>;
    secondary: Record<string, string>;
    error?: Record<string, string>;
    warning?: Record<string, string>;
    info?: Record<string, string>;
    success?: Record<string, string>;
    contrastText: string;
    background: {
        default: string;
        paper: string;
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint?: string;
    };
}

export default IPalette;