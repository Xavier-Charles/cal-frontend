import styled from "styled-components"

const EventItem = (props) => {
    
    let {event, index, handleItemEvent } = props;
    let tag = `item#${index}`;
    let eventDate = new Date(event.startDate);
    let start = new Date(event.startDate + " " + event.startTime + "Z");
    let end = new Date(event.endDate + " " + event.endTime + "Z");
                        
    return (
        <ItemStyles
            id={tag}
            key={index}
            class="events__item"
            onClick={() => handleItemEvent(index, "click")}
            onMouseLeave={() => handleItemEvent(index, "leave")}
        >
            <div class="events__item--left">
                <p class="events__name">
                    {event.name}{" "}
                    <span class="events__date">{" -  " + event.location}</span>
                </p>
                <p class="events__date">{eventDate.toDateString()}</p>
                <p class="events__description">{event.description}</p>
                <div class="register">
                    <a href={event.eventLink}>Register</a>
                </div>
            </div>
            <div class="attend">
                <label label="label">Going? </label>
                <input id="c1" type="checkbox" />
                <div class="event_type">
                    {event.type.map((type, i) => {
                        return <div class={`circle --${type}`} key={i}></div>;
                    })}
                </div>
            </div>
        </ItemStyles>
    );
}

export default EventItem

const ItemStyles = styled.li`

    background: #fff;
    border-left: 8px solid #86d8c9;
    border-radius: 2px;
    -moz-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
    padding: 15px 16px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 16px;
    height: 50px;
    overflow-y: hidden;
    transition: 0.4s ease-out;

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
    }
    .event_type {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }
    .register {
        /* body {
            background: #2f2f31;
            transform: rotateX(0.003deg);
            height: 100vh;
            color: #fff;
        } */
        position: relative;
        margin: 30px 0;

        a {
            position: absolute;
            left: 30%;
            transform: translate(-50%, -50%);
            color: #86d8c9;
            text-decoration: none;
            font-size: 0.8em;
            display: inline-block;
            text-transform: uppercase;
            padding: 0.5em 2em;
            border: 2px solid #86d8c9;
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
            background: #86d8c9;
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
            font-size: 0.8em;
            font-weight: 500;
        }
        input[type="checkbox"] {
            --active: #86d8c9;
            --active-inner: #fff;
            --focus: 1.5px rgba(39, 94, 254, 0.3);
            --border: #bbc1e1;
            --border-hover: #86d8c9;
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