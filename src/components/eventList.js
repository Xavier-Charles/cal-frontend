import React from "react";
import dummyEventsList from "../data/events";
import styled from "styled-components";
import EventItem from "./eventItem";


const EventList = (props) => {
    // const [focused, setFocused] = useState(false);
    const handleItemEvent = (i, eventType, e) => {
        if (e.target.id !== "input_attend"){
        let tag = `item#${i}`;
        let elHeight = document.getElementById(tag)
            ? document.getElementById(tag).scrollHeight
            : 0;
        eventType === "click"
            ? document.getElementById(tag).clientHeight !== elHeight
                ? (document.getElementById(tag).style.height = `${elHeight}px`)
                : (document.getElementById(tag).style.height = "50px")
            : (document.getElementById(tag).style.height = "50px");
        }
        return
    };

    return (
        <EventStyles>
            <div class="events-container">
                <p
                    className="events__add"
                    onClick={() => props.setShowModal(true)}
                >
                    Add Event
                </p>
                <span class="events__title">Upcoming events this month </span>
                <ul class="events__list">
                    {dummyEventsList.map((e, i) => {
                        let tag = `item#${i}`;
                        let eventDate = new Date(e.startDate);
                        let start = new Date(
                            e.startDate + " " + e.startTime + "Z"
                        );
                        let end = new Date(e.endDate + " " + e.endTime + "Z");
                        return (
                            <EventItem
                                event={e}
                                index={i}
                                handleItemEvent={handleItemEvent}
                            />
                        );
                    })}
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

    width: 20vw;
    min-width: 350px;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility;
    background: #fcfcfc;
    margin: 1vw 0;

    .events-container {
        padding: 0 15px;
        height: 64.9vh;
        overflow: auto;
        min-height: 520px;
    }

    .events__title {
        color: #bec1ca;
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 1vw;
        margin-top: 0;
    }
    .events__list {
        padding: 0;
    }
    .events__add {
        background: #e5efe9;
        border: 1px solid #5a72b5;
        border-radius: 4px;
        padding: 2px 4px;
        float: right;
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
