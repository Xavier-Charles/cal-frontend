import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import logo from "../assets/EthC.png";
// import { Link, withRouter } from "react-router-dom";
// import { HashLink as HLink } from "react-router-hash-link";

let navHeight = "6vw";
function Nav(props) {
    //---custom hook
    const user = { name: "Deniz", email: "deniz@ethereumCentral.io" };
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [navOpen, setNavOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [loggedIn, setLoggedIn] = useState(true);

    function handleScrollDown() {
        var currentScrollPos = window.pageYOffset;
        console.log(
            `currentScrollPos ${currentScrollPos} prevScrollpos ${prevScrollpos}` //prevScrollpos not changing
        );
        setPrevScrollpos(window.pageYOffset);
        // console.log(
        //     `currentScrollPos ${currentScrollPos} prevScrollpos ${pos}`
        // );
        // setPos(window.pageYOffset);
        // if (currentScrollPos >= prevScrollpos) {
        //     // setPos(window.pageYOffset);
        //     // setPrevScrollpos(currentScrollPos);
        //     // setVisible(false);
        // } else {
        //     // setVisible(true);
        // }
    }

    useEffect(() => {
        console.log(window.innerWidth);
        // window.addEventListener("scroll", () => setScrollPosY(window.scrollY));
        window.addEventListener("resize", () => setHeight(window.innerHeight));
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        window.addEventListener("scroll", () => handleScrollDown());
    }, []);
    //! to be componentised-----------------------------------

    return (
        <NavStyle
            style={{
                top:
                    window.pageYOffset >= prevScrollpos
                        ? 0
                        : height * 0.06 > 50
                        ? "-7vw"
                        : "-60px",
            }}
        >
            {console.log(`prevScrollpos ${prevScrollpos}`)}
            <div id="navbar" className="Nav-container">
                <div className="Nav-brand">
                    <a className="Nav-brand-logo" to="/">
                        Ethereun Central
                    </a>
                    <div
                        id="menuToggle"
                        className={
                            // width > 620 ? "menuLarge" : navOpen ? "navOpen" : ""
                            "menuLarge"
                        }
                    >
                        {/* {width < 620 && (
                            <div>
                                <input
                                    onClick={() => setNavOpen(!navOpen)}
                                    type="checkbox"
                                />
                                <span />
                                <span style={{ width: "25px" }} />
                                <span />
                            </div>
                        )} */}
                        <ul id="menu">
                            <li>
                                <a to="/login">
                                    <span className="user-text">
                                        {loggedIn ? user.name : ""}
                                    </span>
                                    <span className="icon">
                                        <svg
                                            width={width * 0.04}
                                            height={width * 0.04}
                                            viewBox="0 0 24 24"
                                            fill={loggedIn ? "" : "none"}
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                            style={{ marginTop: `0` }}
                                        >
                                            <path
                                                d="M15.25 8C15.25 9.79493 13.7949 11.25 12 11.25C10.2051 11.25 8.75 9.79493 8.75 8C8.75 6.20507 10.2051 4.75 12 4.75C13.7949 4.75 15.25 6.20507 15.25 8Z"
                                                stroke="#141414"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                            <path
                                                d="M6.84748 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6407 17.2584C17.8563 15.7731 16.068 14 12 14C7.93198 14 6.14364 15.7731 5.35921 17.2584C4.82594 18.2681 5.70556 19.25 6.84748 19.25Z"
                                                stroke="#141414"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </NavStyle>
    );
}

export default Nav;

const NavStyle = styled.nav`
    background-color: #fff0;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0%);
    /* top: 0; */
    width: 100%;
    max-width: 100%;
    z-index: 6;
    -webkit-transition: height 0.2s ease-in-out;
    transition: height 0.2s ease-in-out;
    height: 50px;
    transition: top 0.3s;

    .Nav-container {
        border-bottom: 1px solid;
        background-color: #fff;
        opacity: 0.9;
    }
    .Nav-brand {
        display: flex;
        margin-bottom: 3px;
    }
    .Nav-brand-logo {
        display: block;
        /* background-position: 15px 12px; */
        /* 50% 50% centers image in div */
        background: url(${logo}) 50% 50% no-repeat;
        background-size: cover;
        background-repeat: no-repeat;
        height: ${navHeight};
        width: 22vw;
        text-indent: -1000%;
        -webkit-tap-highlight-color: transparent;
    }
    .Nav-brand-logoless {
        display: block;
        text-decoration: none;
        color: #1e1e23;
        opacity: 1;
        font-family: Roboto;
        font-size: 1.7em;
        font-weight: 300;
        margin: 12px;
        margin-left: 1.3em;
    }
    .menuLarge {
        position: absolute;
        right: 30px;
        width: 30em;
        ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            list-style-type: none;
            margin: 0 li {
                margin: 0 1em;
            }
        }
        a {
            text-decoration: none;
            color: #1e1e23;
            opacity: 1;
            font-family: Roboto;
            font-size: 1.25em;
            font-weight: 300;
            transition: 200ms;
            display: flex;
            align-items: center;
        }
        a:hover {
            opacity: 0.5;
        }

        .user-text {
            font-size: 2rem;
            margin-top: 0;
            vertical-align: middle;
            display: inline-block;
        }
        .icon {
            vertical-align: middle;
            display: inline-block;
        }
    }
    /* @media (max-width: 620px) {
        #menuToggle {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 17px;
            right: 30px;
            z-index: 1;
            -webkit-user-select: none;
            user-select: none;
        }
        #menuToggle input {
            display: flex;
            width: 26px;
            height: 15px;
            position: absolute;
            cursor: pointer;
            opacity: 0;
            z-index: 2;
            -webkit-tap-highlight-color: transparent;
        }
        #menuToggle span {
            display: flex;
            width: 29px;
            height: 2px;
            margin-bottom: 5px;
            position: relative;
            background: #00000069;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 5px 0px;
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
                background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
                opacity 0.55s ease;
        }
        #menuToggle span:first-child {
            transform-origin: 0% 0%;
        }
        #menuToggle span:nth-last-child(2) {
            transform-origin: 0% 100%;
        }
        #menuToggle.navOpen span {
            opacity: 1;
            transform: rotate(48deg) translate(3.5px, -6px);
            background: #36383f;
        }
        #menuToggle.navOpen span:nth-last-child(3) {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
        }
        #menuToggle.navOpen span:nth-last-child(2) {
            transform: rotate(-45deg) translate(-3.5px, 15px);
        }
        #menu {
            position: absolute;
            width: 155px;
            height: 100vh;
            box-shadow: 0 0 10px #85888c;
            border-right: 5px solid #ecba70db;
            border-radius: 0px 0px 0px 270px;
            margin: -50px 0 0 371px;
            padding: 50px;
            padding-top: 85px;
            background-color: #fff;
            text-align: left;
            -webkit-font-smoothing: antialiased;
            transform-origin: 0% 0%;
            transform: translate(-100%, 0);
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        }
        #menu li {
            padding: 10px 0;
            transition-delay: 2s;
            border-bottom: 1px solid #000;
        }
        #menuToggle.navOpen ul {
            transform: translate(-215%, 0);
        }
        a {
            text-decoration: none;
            color: #1e1e23;
            opacity: 1;
            font-family: Roboto;
            font-size: 1.25em;
            font-weight: 300;
            transition: 200ms;
        }
        a:hover {
            opacity: 0.5;
        }
        ul {
            padding: 0;
            list-style-type: none;
        }
    } */
    @media only screen and (max-width: 735px) {
        .Nav-brand-logo {
            height: 45px;
            width: 162px;
        }
        .Nav-brand {
            margin-bottom: 0px;
        }
    }
`;
