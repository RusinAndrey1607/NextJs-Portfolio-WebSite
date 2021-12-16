import { createGlobalStyle } from "styled-components";

import cursor from "./../images/icon/cursor.svg";
import cursorPointer from "./../images/icon/cursor-pointer.svg";

// Here are the basic styles of the application,
// as well as reset the styles that are used by the browser by default.

export const GlobalStyles = createGlobalStyle `
    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    ul[class],
    ol[class] {
        padding: 0;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[class] {
        list-style: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    a {
        text-decoration: none;
    }

    button {
        display: inline-block;
        cursor: pointer;
        border: none;
        background-color: transparent;
    }
    html,
    body {
        box-sizing: border-box;
        height: 100%;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        transition: background-color, color, 0.45s;
        scroll-behavior: smooth;
    }
    a,
    button {
        cursor: url(${cursorPointer}) 0 0, pointer;
    }

    body {
        background-color:${(props) => props.theme.body};
        color:${(props) => props.theme.fontColor};
        cursor: url(${cursor}) 0 0, auto;
        &::-webkit-scrollbar {
            z-index: 10;
            width: 11px;
            height: 0;
            background: #3c3b3a;
            mix-blend-mode: normal;
            opacity: 0.55;
        }
        &::-webkit-scrollbar-button {
            display: none;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 6px;
            background-color: #181818;
        }
    }

    ::selection {
        background: #181818;
        
    }

    ::-moz-selection {
        background: #181818;
    
    }

    .container {
        max-width: 1230px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .title {
        font-weight: bold;
        font-size: 80px;
        line-height: 120px;
    }

    @media (max-width: 700px) {
        .container {
            padding: 0 15px;
        }
        .title {
            font-size: 70px;
            line-height: 100px;
        }
    }

    @media (max-width: 580px) {
        .title {
            font-size: 60px;
            line-height: 100px;
        }
    }

    @media (max-width: 380px) {
        .title {
            font-size: 50px;
            line-height: 100px;
        }
    }


`;