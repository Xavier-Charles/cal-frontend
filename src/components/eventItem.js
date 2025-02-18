import React, { useState } from 'react';
import styled from "styled-components";

const EventType = ({ type, i }) => (
  <div class={`cstm-hover-trigger circle --${type}`} key={i}>
    <div class="cstm-hover-target hidden relative mr-1">
      <div class="absolute -right-1.5 w-max bg-black text-white text-xs rounded py-1 px-4 bottom-full">
        {type}
        <svg
          class="absolute text-black h-2 right-0 mr-1 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  </div>
);

const EventItem = (props) => {
  const [attend, setAttend] = useState(false)
  const [upvote, setUpvote] = useState(false);
  const { event, index, handleItemEvent } = props;
  
  const handleAttend = (bool) => {
    setAttend(bool)
  }
  const handleUpvote = (bool) => {
    setUpvote(bool)
  };
  
  const tag = `item#${index}`;
  const start = new Date(event.startDate)
  const end = new Date(event.endDate);
  const startDate = `${start.toLocaleString("default", {
    month: "short",
  })} ${start.getDate()}' ${start.getFullYear().toString().substr(-2)}`
  const endDate = `${end.toLocaleString("default", {
    month: "short",
  })} ${end.getDate()}' ${end.getFullYear().toString().substr(-2)}`;  //   let start = new Date(event.startDate + " " + event.startTime + "Z");
  
  return (
    <ItemStyles>
      <article
        id={tag}
        key={index}
        // onClick={(e) => handleItemEvent(index, "click", e)}
        class={`border-l-8 mx-auto ${
          attend ? "border-cerise" : "border-cyan"
        } rounded-lg shadow-md md:p-4 bg-white sm:py-3 py-4 px-2 mb-10`}
      >
        <div class="flex flex-row justify-end col-span-2 right-14">
          {[...new Set(event.type)].map((type, i) => {
            return <EventType type={type} i={i} />;
          })}
        </div>
        <div role="presentation">
          <div>
            <div class="m-2">
              <div class="grid grid-cols-12 mt-3">
                <div class="col-span-2">
                  <img
                    class="rounded-md w-12"
                    src={event.img}
                    alt="eth" //! proper alternate here please
                    loading="lazy"
                  />
                </div>
                <h2 class="text-2xl font-bold self-end leading-7 col-span-10">
                  <a href="" id="article-link-151230">
                    {event.name}
                  </a>
                </h2>
              </div>
              <div class="flex flex-col my-2">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-clock"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                  <span class="ml-2 text text-gray-700 text-sm hover:text-black">
                    <time>{`${startDate}${
                      endDate === startDate ? "" : " - " + endDate
                    }`}</time>
                  </span>
                </div>

                <div>
                  {[...new Set(event.tag)]?.map((tag, i) => {
                    return (
                      <a
                        href="/t/react"
                        class="text-sm text-gray-600 p-1 hover:text-black"
                        key={i}
                      >
                        <span class="text-opacity-50">#</span>
                        {tag.toLowerCase()}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div class="mb-1 leading-6">{event.description}</div>
              <div class="flex flex-col items-start mt-4">
                <div class="flex">
                  <button
                    onClick={() => handleUpvote(!upvote)}
                    class={`${
                      upvote
                        ? "bg-cerise text-white mr-1"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    } py-1 pl-1 pr-2 focus:outline-none text-sm rounded`}
                  >
                    <svg
                      class="inline fill-current"
                      width="20"
                      height="20"
                      fill={upvote ? "#F61067" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                    </svg>
                    <span class="mx-1 hidden md:inline">
                      &nbsp;195 {upvote ? "Upvoted" : "Upvote"}
                    </span>
                  </button>
                  <button
                    onClick={() => handleAttend(!attend)}
                    class={`${
                      attend
                        ? "bg-cerise text-white ml-1"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    } py-1 pl-1 pr-2 focus:outline-none text-sm rounded `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke={attend ? "#fff" : "#2c3e50"}
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="5" width="16" height="16" rx="2" />
                      <line x1="16" y1="3" x2="16" y2="7" />
                      <line x1="8" y1="3" x2="8" y2="7" />
                      <line x1="4" y1="11" x2="20" y2="11" />
                      <line x1="10" y1="16" x2="14" y2="16" />
                      <line x1="12" y1="14" x2="12" y2="18" />
                    </svg>
                    <span class="mx-1 hidden md:inline">
                      {/* count attending */}
                      &nbsp; {attend ? "Attending" : "Attend"}
                    </span>
                  </button>
                </div>
                <div class="flex items-center mt-5">
                  {/* <button
                  type="button"
                  class="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-black hover:bg-gray-500"
                >
                  <span>Save</span>
                </button> */}
                  <div
                    class={`${upvote ? "register-upvote" : ""} register my-4`}
                  >
                    <a href={event.eventLink}>Register</a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </ItemStyles>
  );
};

export default EventItem;

const ItemStyles = styled.li`
  /* background: #fff;
  border-left: 8px solid #00c4cc;
  border-radius: 2px;
  -moz-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  padding: 15px 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: 80px;
  overflow-y: hidden; 
  transition: 0.4s ease-out; */

  .quick-view {
    display: flex;
    flex-direction: row;
  }

  .events__item--left {
    width: calc(100% - 76px);
  }
  /* .events__item:hover {
        max-height: 100%;
    } */
  .events__name {
    margin-top: 0;
    font-size: 0.8em;
    font-weight: 700;
    color: #222741;
    display: block;
    margin-bottom: 6px;
    /* max-width: calc(100% - 13px); */
  }
  .events__date {
    margin-top: 0;
    font-size: 0.8em;
    color: #9faab7;
    display: inline-block;
  }
  .events__description {
    font-size: 0.8em;
    font-weight: 500;
    color: #222741;
    display: block;
    margin-bottom: 6px;
    margin-left: 3%;
  }

  .date-big {
    display: flex;
    border: 0.5px solid #bbb;
    width: 60px;
    height: 45px;
    margin: 0 3%;
    text-align: center;

    .date-big-start {
      display: flex;
      flex-direction: column;
      margin: auto;

      .date-big-day {
        font-weight: 500;
        margin: 1px;
      }
      .date-big-month {
        margin: 1px;
        font-size: 10px;
        color: #6b6a6a;
      }
    }
  }
  .register {
    position: relative;

    a {
      position: absolute;
      left: 4rem;
      margin-top: 0.5rem;
      transform: translate(-50%, -50%);
      color: #00c4cc;
      text-decoration: none;
      font-size: 0.8rem;
      display: inline-block;
      text-transform: uppercase;
      padding: 0.25rem 2rem;
      border: 2px solid #00c4cc;
      transition: 0.02s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }
    a::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      right: 100%;
      bottom: 0;
      background: #00c4cc;
      transition: 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1),
        left 0.3s cubic-bezier(0.1, 0, 0.1, 1);
      z-index: -1;
    }
    a::after {
      content: "";
      display: inline-block;
      background-image: url("https://image.flaticon.com/icons/png/128/109/109617.png");
      position: absolute;
      top: 0;
      left: calc(100% - 3em);
      right: 3em;
      bottom: 0;
      background-size: 1.5em;
      background-repeat: no-repeat;
      background-position: center;
      transition: right 0.3s cubic-bezier(0.1, 0, 0.1, 1);
    }
    a:hover {
      padding: 0.5em 3.5em 0.5em 0.5em;
    }
    a:hover::before {
      left: calc(100% - 3em);
      right: 0;
      transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1),
        left 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }
    a:hover::after {
      right: 0;
      transition: right 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }
  }

  //!-------------------------Attending------------------------------------
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .attend {
      margin-top: -3.5px;
    }
    label {
      font-size: 0.9em;
      font-weight: 500;
    }
    input[type="checkbox"] {
      --active: #00c4cc;
      --active-inner: #fff;
      --focus: 1.5px rgba(39, 94, 254, 0.3);
      --border: #bbc1e1;
      --border-hover: #00c4cc;
      --background: #fff;
      --disabled: #f6f8ff;
      --disabled-inner: #e1e6f9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
      margin-top: -3px;
    }
    input[type="checkbox"]:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }
    input[type="checkbox"]:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }

    input[type="checkbox"]:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    input[type="checkbox"]:not(.switch),
    input[type="radio"]:not(.switch) {
      width: 21px;
    }
    input[type="checkbox"]:not(.switch):after,
    input[type="radio"]:not(.switch):after {
      opacity: var(--o, 0);
    }
    input[type="checkbox"]:not(.switch):checked,
    input[type="radio"]:not(.switch):checked {
      --o: 1;
    }
    input[type="checkbox"] + label,
    input[type="radio"] + label {
      font-size: 0.8em;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }

    input[type="checkbox"]:not(.switch) {
      border-radius: 7px;
    }
    input[type="checkbox"]:not(.switch):after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }
    input[type="checkbox"]:not(.switch):checked {
      --r: 43deg;
    }
    //!----------------Event Type ----------------------------
    .circle {
      height: 10px;
      width: 10px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      margin: 1.5px;
      cursor: pointer;
    }
    .--Event {
      background: #ff0000;
    }
    .--Eth1 {
      background: #aa6ed0;
    }
    .--Eth2 {
      background: #30bd30;
    }
    .--ICO {
      background: yellow;
    }
  }
`;
