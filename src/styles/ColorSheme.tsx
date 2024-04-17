interface Colors {
    primary?: string;
    accent?: string;
    headerText?: string;
    mainText?: string;
    link?: string;
    backgroundWebsite?: string;
    backgroundColorSection?: string;
    iconNavBar?:string
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
        backgroundWebsite: "#F0F0F6",
        iconNavBar:"#767676"
    };
    const darkColors: Colors  = {
        primary: "#FFB400", // сохраняем жёлтый цвет
        accent: "rgba(255, 180, 0, 0.71)", // сохраняем оранжевый акцент
        headerText: "#FFFFFF", // белый текст для заголовков
        mainText: "#E0E0E0", // серый текст
        link: "#FFB400", // сохраняем жёлтый для ссылок
        backgroundColorSection: "#2B2B2B", // тёмно-серый фон секций
        backgroundWebsite: "#121212", // очень тёмный фон для всего сайта
        iconNavBar:"#E0E0E0" // серые иконки для навигационной панели
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
