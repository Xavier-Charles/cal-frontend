import React from "react";
import dummyEventsList from "../data/events";
import styled from "styled-components";
import EventItem from "./eventItem";


const EventList = (props) => {
    // const [focused, setFocused] = useState(false);
    const handleItemEvent = (i, eventType) => {
        let tag = `item#${i}`;
        let elHeight = document.getElementById(tag)
            ? document.getElementById(tag).scrollHeight
            : 0;
        eventType === "click"
            ? document.getElementById(tag).clientHeight !== elHeight
                ? (document.getElementById(tag).style.height = `${elHeight}px`)
                : (document.getElementById(tag).style.height = "50px")
            : (document.getElementById(tag).style.height = "50px");
    };

    return (
        <EventStyles>
            <div class="events-container">
                <span class="events__title">Upcoming events this month</span>
                <ul class="events__list">
                    {dummyEventsList.map((e, i) => {
                        let tag = `item#${i}`;
                        let eventDate = new Date(e.startDate);
                        let start = new Date(e.startDate + " " + e.startTime + "Z");
                        let end = new Date(e.endDate + " " + e.endTime + "Z");
                        return (
                            <EventItem event={e} index={i} handleItemEvent={handleItemEvent}/>);
                    })}
                </ul>
            </div>
            <div class="events-container">
                <span class="events__title">Upcoming events this month</span>
                <ul class="events__list">
                    <li class="events__item">
                        <div class="events__item--left">
                            <span class="events__name">
                                Kucoin Listing (ETH2)
                            </span>
                            <span class="events__date">Apr 24</span>
                        </div>
                        <span class="events__tag">ICO</span>
                    </li>
                    <li class="events__item">
                        <div class="events__item--left">
                            <span class="events__name">EthCC</span>
                            <span class="events__date">Apr 25</span>
                        </div>
                        <span class="events__tag events__tag--danger">
                            Event
                        </span>
                    </li>
                    <li class="events__item">
                        <div class="events__item--left">
                            <span class="events__name">
                                GV Funds on Ethereum
                            </span>
                            <span class="events__date">Apr 27 - Apr 28</span>
                        </div>
                        <span class="events__tag events__tag--highlighted">
                            All day
                        </span>
                    </li>
                    <li class="events__item">
                        <div class="events__item--left">
                            <span class="events__name">Rainbow Bridge</span>
                            <span class="events__date">Apr 29 - Apr 30</span>
                        </div>
                    </li>
                </ul>
            </div>
        </EventStyles>
    );
};

export default EventList;

const EventStyles = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    width: 350px;
    min-width: 350px;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility;
    background: #fcfcfc;

    .events-container {
        padding: 0 15px;
    }

    .events__title {
        color: #bec1ca;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
    }
    .events__list {
        padding: 0;
    }
    /* .events__tag {
        background: #66dcec;
        border: 2px solid #fefefe;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        color: #fff;
        font-size: 10px;
        font-weight: 600;
        width: 60px;
        margin-left: 16px;
        padding: 5px 2px;
        text-align: center;
    }
    .events__tag--highlighted {
        background: #fdca40;
    }
    .events__tag--danger {
        background: #fd7440;
    } */
`;
