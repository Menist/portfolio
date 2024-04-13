interface Colors {
    primary?: string;
    accent?: string;
    headerText?: string;
    mainText?: string;
    link?: string;
    backgroundWebsite?: string;
    backgroundColorSection?: string;
}
export type ThemeObjectType = {
    colors: Colors,
    text: {
        textSize: string,
        lineHeight:string
    },
    animation: {
        transitionWidth: string
        transitionAll:string
        transitionBackground:string
        transitionColor:string
    }
}
export const themeNew = (isDarkTheme: boolean): ThemeObjectType => {

    const lightColors: Colors  = {
        primary: "#FFB400",
        accent: "rgba(255,180,0,0.71)",
        headerText: "#2B2B2B",
        mainText: "#767676",
        link: "#FFB400",
        backgroundColorSection: "#FFFFFF",
        backgroundWebsite: "#F0F0F6"
    };

    const darkColors: Colors = {
        primary: "#6B5B95",
        accent: "rgba(107,91,149,0.71)",
        headerText: "#E0E0E0",
        mainText: "#CCCCCC",
        link: "#6B5B95",
        backgroundColorSection: "#2B2B2B",
        backgroundWebsite: "#1A1A1A"
    };

    const colors = isDarkTheme ? darkColors : lightColors;

    return {
        colors,
        text: {
            textSize: "15px",
            lineHeight: "24px"
        },
        animation: {
            transitionWidth: "width .3s ease-out",
            transitionAll: "all .9s ease",
            transitionBackground: "background .3s ease-out",
            transitionColor: "color .3s ease-out",
        }
    };
};
