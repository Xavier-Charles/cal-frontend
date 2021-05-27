import React from "react";
import styled from "styled-components";

export default function Modal(props) {
    return (
        <ModalStyle style={{ display: props.show ? "" : "none" }}>
            {/* <div class="card">
                <div class="content-wrapper">
                    <h2 class="heading">CSS Modal</h2>
                    <p>
                        This demo shows how to open a modal without using
                        JavaScript. While it's a cool trick, it's not 100%
                        accessible. JavaScript is needed to set focus on the
                        modal and to create a focus trap.
                    </p>
                </div>
                <a href="#modal" role="button" class="button button__link">
                    Modal Trigger
                </a>
            </div> */}

            <div class="modal-wrapper" id="modal">
                <div class="modal-body card">
                    <div class="modal-header">
                        <h2 class="heading">Add an event</h2>
                        <a
                            href="#!"
                            role="button"
                            class="close"
                            aria-label="close this modal"
                            onClick={() => props.setShowModal(false)}
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                            </svg>
                        </a>
                    </div>
                    <div class="add-event-page">
                        <div class="form">
                            <form class="event-form">
                                <input type="text" placeholder="Event Name" />
                                <input type="text" placeholder="Registration Link" />
                                <input type="text" placeholder="Event Description" />
                                <button>Add</button>
                            </form>

                        </div>
                    </div>
                </div>
                <a href="#!" class="outside-trigger"></a>
            </div>
        </ModalStyle>
    );
}

const ModalStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  z-index: 5;

  body {
    background-image: linear-gradient(48deg, #5a72b5 0%, #e5efe9 70%);
    color: #121943;
    display: grid;
    flex-direction: column;
    font-family: "Lato", sans-serif;
    font-size: 1em;
    height: 100vh;
    place-items: center;
    line-height: 1.2;
  }

  .heading {
    font-size: 1.5em;
    margin-bottom: 12px;
    margin-left: 3.125rem;
  }

  .card {
    background: #fff;
    background-image: linear-gradient(48deg, #fff 0%, #e5efe9 100%);
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px;
    box-shadow: -20px 20px 35px 1px rgba(10, 49, 86, 0.18);
    display: flex;
    flex-direction: column;
    padding: 18px;
    margin: 40px;
    margin-top: 12rem;
    max-width: 400px;
    width: 100%;
  }

  .button {
    align-items: center;
    background: #e5efe9;
    border: 1px solid #5a72b5;
    border-radius: 4px;
    color: #121943;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    font-weight: 700;
    height: 40px;
    justify-content: center;
    width: 150px;
  }
  .button:focus {
    border: 2px solid transparent;
    box-shadow: 0px 0px 0px 2px #121943;
    outline: solid 4px transparent;
  }

  .link {
    color: #121943;
  }
  .link:focus {
    box-shadow: 0px 0px 0px 2px #121943;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
  .input-wrapper .label {
    align-items: baseline;
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .input-wrapper .optional {
    color: #5a72b5;
    font-size: 0.9em;
  }
  .input-wrapper .input {
    border: 1px solid #5a72b5;
    border-radius: 4px;
    height: 40px;
    padding: 8px;
  }

  code {
    background: #e5efe9;
    border: 1px solid #5a72b5;
    border-radius: 4px;
    padding: 2px 4px;
  }

  .modal-header {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
  }

  .close {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    height: 16px;
    text-decoration: none;
    width: 16px;
  }
  .close svg {
    width: 16px;
  }

  .modal-wrapper {
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  #modal {
    /* opacity: 0; */
    transition: opacity 0.25s ease-in-out;
    /* visibility: hidden; */
  }
  #modal {
    opacity: 1;
    visibility: visible;
  }
  #modal .modal-body {
    opacity: 1;
    transform: translateY(1);
  }
  #modal .modal-body {
    max-width: 500px;
    /* opacity: 0; */
    transform: translateY(-100px);
    transition: opacity 0.25s ease-in-out;
    width: 100%;
    z-index: 15;
  }

  .outside-trigger {
    bottom: 0;
    cursor: default;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .button__link {
    text-decoration: none;
  }

  .add-event-page {
    width: 360px;
    margin: auto;
  }
  .form {
    position: relative;
    /* z-index: 1; */
    /* background: #ffffff; */
    max-width: 360px;
    /* margin: 0 auto 100px;
        padding: 45px; */
    text-align: center;
  }
  .form input {
    font-family: "Lato", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,
  .form button:active,
  .form button:focus {
    background: #43a047;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4caf50;
    text-decoration: none;
  }
  .form .event-form {
    /* display: none; */
  }
  .container {
    position: relative;
    z-index: 15;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before,
  .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #ef3b3a;
  }
`;
