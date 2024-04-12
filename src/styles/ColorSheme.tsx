export const themeNew = (isDarkTheme: boolean) => {
    interface Colors {
        primary?: string;
        accent?: string;
        headerText?: string;
        mainText?: string;
        link?: string;
        backgroundWebsite?: string;
        backgroundColorSection?: string;
    }

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
        primary: "#FFB400",
        accent: "rgba(255,180,0,0.71)",
        headerText: "#FFFFFF",
        mainText: "#e5e5e5",
        link: "#FFB400",
        backgroundColorSection: "#1E1E1E",
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
