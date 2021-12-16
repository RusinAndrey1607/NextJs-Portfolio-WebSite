import darkIcon from './../images/icon/dark-theme.svg'
import lightIcon from './../images/icon/white-theme.svg'

// This object is the equivalent of the styles for the Dark theme.
export const dark = {
    scroolBody: "#3c3b3a",
    scroolButton: "",
    body: "#222222",
    fontColor: "#faf4e6",
    headerButtonImage: `url(${lightIcon})`,
    contact: {
        color: "#7e7c7c",
        background: "#181818",
        itemColor: "#6d6d6d",
        opacity: 1,
        linkColor: "#6d6d6d",
        beforeColor: "#faf4e6",

    },
    fio: "#faf4e6;",
    skills: {
        item: "#181818",
        hover: " 0px 0px 12px 1px #faf4e6",
        opacity: 0.6,

    },
    hero: {
        p: "#faf4e6",
        filter: "brightness(70%)",
        background: "#3c3b3a",
        link: "#fff",
        btn: "#ffe8e8",
        color: "#faf4e6",
        btnShadow: "#fff",


    },
    header: {
        background: "#181818",
        color: "#fff",
    }

};

// This object is the equivalent of the styles for the light theme.
export const light = {
    scroolBody: "#999999",
    scroolButton: "#ffe8e8",
    body: "#fff",
    fontColor: "#999999",
    headerButtonImage: `url(${darkIcon})`,
    contact: {
        color: "#000",
        background: "#ffe8e8",
        itemColor: '#000',
        opacity: 0.7,
        linkColor: "#000",
        beforeColor: "#000",
    },
    fio: "#6d6d6d;",
    skills: {
        item: "#ededed",
        hover: " 0px 0px 12px 1px #999999",
        opacity: 1,
    },
    hero: {
        p: "#6d6d6d",
        filter: "none",
        background: "rgba(216,216,216,0.3)",
        link: "#000",
        btn: "#181818",
        color: "#000",
        btnShadow: "rgb(255, 232, 232)",

    },
    header: {
        background: "#fff",
        color: "#000"
    }
};