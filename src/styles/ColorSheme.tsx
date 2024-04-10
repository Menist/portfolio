export const themeNew = (isDarkTheme: boolean) => {
    const lightColors = {
        primary: "#FFB400",
        accent: "rgba(255,180,0,0.71)",
        headerText: "#2B2B2B",
        mainText: "#767676",
        link: "#FFB400",
        background: "#FFFFFF",
        backgroundWebsite: "#F5F5F5"
    };

    const darkColors = {
        primary: "#FFB400",
        accent: "rgba(255,180,0,0.71)",
        headerText: "#FFFFFF",
        mainText: "#FFB400",
        link: "#FFB400",
        background: "#1E1E1E",
        backgroundWebsite: "#303030"
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
