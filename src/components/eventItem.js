import styled from "styled-components";

const EventType = ({ type, key }) => (
  <div class={`hover-trigger  circle --${type}`} key={key}>
    <div class="hover-target hidden relative mr-1">
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
  let { event, index, handleItemEvent } = props;
  let tag = `item#${index}`;
  let eventDate = new Date(event.startDate);
  let start = new Date(event.startDate + " " + event.startTime + "Z");
  let end = new Date(event.endDate + " " + event.endTime + "Z");

  return (
    <ItemStyles
      id={tag}
      key={index}
      class="events__item"
      onClick={(e) => handleItemEvent(index, "click", e)}
      // onMouseLeave={() => handleItemEvent(index, "leave")}
    >
      <div class="quick-view">
        <div class="date-big">
          <div class="date-big-start">
            <p class="date-big-month">
              {eventDate.toLocaleDateString("en", {
                month: "short",
              })}
            </p>
            <p class="date-big-day">
              {eventDate.getDay().toString().padStart(2, "0")}
            </p>
          </div>
        </div>
        <div class="events__item--left">
          <p class="events__name">
            {event.name}{" "}
            <span class="events__date">{" -  " + event.location}</span>
          </p>
          <p class="events__date">
            <label label="label">Going? </label>
            <input id="input_attend" type="checkbox" />
          </p>
        </div>
        {/* <div class="attend"> */}
        <div class="event_type">
          {event.type.map((type, i) => {
            return <EventType type={type} key={i} />;
          })}
        </div>
        {/* </div> */}
      </div>
      <div class="events__item--left">
        <p class="events__description">{event.description}</p>
        <div class="register">
          <a href={event.eventLink}>Register</a>
        </div>
      </div>
    </ItemStyles>
  );
};

export default EventItem;

const ItemStyles = styled.li`
  background: #fff;
  border-left: 8px solid #00c4cc;
  border-radius: 2px;
  -moz-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  padding: 15px 6px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 16px;
  height: 50px;
  overflow-y: hidden;
  transition: 0.4s ease-out;

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
  .event_type {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
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
    margin: 30px 0;

    a {
      position: absolute;
      left: 30%;
      transform: translate(-50%, -50%);
      color: #00c4cc;
      text-decoration: none;
      font-size: 0.8em;
      display: inline-block;
      text-transform: uppercase;
      padding: 0.5em 2em;
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
